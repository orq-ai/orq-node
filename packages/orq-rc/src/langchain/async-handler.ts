/**
 * Async LangChain callback handler that properly awaits span sending.
 */

import { BaseCallbackHandler } from "@langchain/core/callbacks/base";
import type { Serialized } from "@langchain/core/load/serializable";
import type { BaseMessage } from "@langchain/core/messages";
import type { AgentAction, AgentFinish } from "@langchain/core/agents";
import type { LLMResult } from "@langchain/core/outputs";
import type { DocumentInterface } from "@langchain/core/documents";
import type { NewTokenIndices } from "@langchain/core/callbacks/base";

import { AsyncOrqTracesClient } from "./client.js";
import { Events } from "./events.js";
import { EventType, InFlightEvent, createInFlightEvent } from "./models.js";
import { buildOtlpSpan } from "./span-builder.js";
import {
  extractModelName,
  extractModelParameters,
  extractTokenUsage,
  formatError,
  nanoTimestamp,
  normalizeMessages,
  resolveSpanName,
} from "./utils.js";

/** Internal LangGraph.js chain names that should not produce spans. */
const _INTERNAL_CHAIN_PREFIXES = [
  "ChannelWrite",
  "ChannelRead",
  "__start__",
];

function _isInternalChain(name: string | undefined): boolean {
  if (!name) return false;
  return _INTERNAL_CHAIN_PREFIXES.some((p) => name.startsWith(p));
}

export class AsyncOrqLangchainCallback extends BaseCallbackHandler {
  name = "AsyncOrqLangchainCallback";

  private _events = new Events();
  private _client: AsyncOrqTracesClient;
  private _ignoredRunIds = new Set<string>();

  constructor(apiKey: string, apiUrl: string = "https://my.orq.ai") {
    super();
    this._client = new AsyncOrqTracesClient(apiKey, apiUrl);
  }

  private _startEvent(
    runId: string,
    parentRunId: string | undefined,
    eventType: EventType,
    serialized: Record<string, unknown>,
    metadata?: Record<string, unknown>,
    tags?: string[],
    spanName?: string,
  ): InFlightEvent {
    this._events.mapParent(runId, parentRunId);
    const traceId = this._events.getTraceId(runId);
    const spanId = this._events.getSpanId(runId);
    const parentSpanId = parentRunId
      ? this._events.getSpanId(parentRunId)
      : null;

    const event = createInFlightEvent({
      runId: spanId,
      parentRunId: parentSpanId,
      traceId,
      eventType,
      name: resolveSpanName(spanName, metadata, serialized),
      startTimeNs: nanoTimestamp(),
      serialized,
      metadata: metadata ?? null,
      tags: tags ?? null,
    });
    this._events.store(runId, event);
    return event;
  }

  private async _finishAndSend(runId: string): Promise<void> {
    const event = this._events.get(runId);
    if (!event) return;
    if (!event.endTimeNs) {
      event.endTimeNs = nanoTimestamp();
    }
    const span = buildOtlpSpan(event);
    await this._client.sendSpan(span);
    this._events.remove(runId);
  }

  // ── LLM callbacks ──────────────────────────────────────────────

  override async handleLLMStart(
    llm: Serialized,
    prompts: string[],
    runId: string,
    parentRunId?: string,
    extraParams?: Record<string, unknown>,
    tags?: string[],
    metadata?: Record<string, unknown>,
    _runName?: string,
  ): Promise<void> {
    try {
      const event = this._startEvent(
        runId,
        parentRunId,
        EventType.LLM,
        llm as unknown as Record<string, unknown>,
        metadata,
        tags,
      );
      event.prompts = prompts;
      event.modelName = extractModelName(
        llm as unknown as Record<string, unknown>,
        extraParams,
      );
      event.modelParameters = extractModelParameters(extraParams);
    } catch {
      // silently ignore tracing errors
    }
  }

  override async handleChatModelStart(
    llm: Serialized,
    messages: BaseMessage[][],
    runId: string,
    parentRunId?: string,
    extraParams?: Record<string, unknown>,
    tags?: string[],
    metadata?: Record<string, unknown>,
    _runName?: string,
  ): Promise<void> {
    try {
      const event = this._startEvent(
        runId,
        parentRunId,
        EventType.LLM,
        llm as unknown as Record<string, unknown>,
        metadata,
        tags,
      );
      event.messages = normalizeMessages(messages);
      event.modelName = extractModelName(
        llm as unknown as Record<string, unknown>,
        extraParams,
      );
      event.modelParameters = extractModelParameters(extraParams);
    } catch {
      // silently ignore tracing errors
    }
  }

  override async handleLLMNewToken(
    token: string,
    _idx: NewTokenIndices,
    runId: string,
    _parentRunId?: string,
    _tags?: string[],
  ): Promise<void> {
    try {
      const event = this._events.get(runId);
      if (event) {
        if (event.streamingTokens === null) {
          event.streamingTokens = [];
        }
        event.streamingTokens.push(token);
      }
    } catch {
      // silently ignore tracing errors
    }
  }

  override async handleLLMEnd(
    output: LLMResult,
    runId: string,
    _parentRunId?: string,
    _tags?: string[],
  ): Promise<void> {
    try {
      const event = this._events.get(runId);
      if (!event) return;

      event.endTimeNs = nanoTimestamp();
      event.tokenUsage = extractTokenUsage(output);

      const choices: Record<string, unknown>[] = [];
      if (output.generations?.length) {
        const firstGen = output.generations[0];
        if (firstGen) {
          for (let idx = 0; idx < firstGen.length; idx++) {
            const gen = firstGen[idx]!;
            const genInfo = gen.generationInfo as
              | Record<string, unknown>
              | undefined;
            const finishReason =
              (genInfo?.["finish_reason"] as string) ?? null;

            let content: string = gen.text;
            if (!content && event.streamingTokens) {
              content = event.streamingTokens.join("");
            }

            choices.push({
              index: idx,
              message: { role: "assistant", content },
              finish_reason: finishReason,
            });
          }
        }
      }
      event.responseChoices = choices;
      await this._finishAndSend(runId);
    } catch {
      // silently ignore tracing errors
    }
  }

  override async handleLLMError(
    err: Error,
    runId: string,
    _parentRunId?: string,
    _tags?: string[],
  ): Promise<void> {
    try {
      const event = this._events.get(runId);
      if (!event) return;
      event.endTimeNs = nanoTimestamp();
      const formatted = formatError(err);
      event.error = {
        type: err.constructor.name,
        message: formatted.message,
        traceback: formatted.traceback,
      };
      await this._finishAndSend(runId);
    } catch {
      // silently ignore tracing errors
    }
  }

  // ── Chain callbacks ────────────────────────────────────────────

  override async handleChainStart(
    chain: Serialized,
    inputs: Record<string, unknown>,
    runId: string,
    parentRunId?: string,
    tags?: string[],
    metadata?: Record<string, unknown>,
    _runType?: string,
    runName?: string,
  ): Promise<void> {
    try {
      if (_isInternalChain(runName)) {
        this._ignoredRunIds.add(runId);
        return;
      }
      const event = this._startEvent(
        runId,
        parentRunId,
        EventType.CHAIN,
        chain as unknown as Record<string, unknown>,
        metadata,
        tags,
        runName,
      );
      event.inputs =
        typeof inputs === "object" && inputs !== null && !Array.isArray(inputs)
          ? inputs
          : { inputs };
    } catch {
      // silently ignore tracing errors
    }
  }

  override async handleChainEnd(
    outputs: Record<string, unknown>,
    runId: string,
    _parentRunId?: string,
    _tags?: string[],
  ): Promise<void> {
    try {
      if (this._ignoredRunIds.delete(runId)) return;
      const event = this._events.get(runId);
      if (!event) return;
      event.endTimeNs = nanoTimestamp();
      event.outputs =
        typeof outputs === "object" &&
        outputs !== null &&
        !Array.isArray(outputs)
          ? outputs
          : { outputs };
      await this._finishAndSend(runId);
    } catch {
      // silently ignore tracing errors
    }
  }

  override async handleChainError(
    err: Error,
    runId: string,
    _parentRunId?: string,
    _tags?: string[],
  ): Promise<void> {
    try {
      if (this._ignoredRunIds.delete(runId)) return;
      const event = this._events.get(runId);
      if (!event) return;
      event.endTimeNs = nanoTimestamp();
      const formatted = formatError(err);
      event.error = {
        type: err.constructor.name,
        message: formatted.message,
        traceback: formatted.traceback,
      };
      await this._finishAndSend(runId);
    } catch {
      // silently ignore tracing errors
    }
  }

  // ── Tool callbacks ─────────────────────────────────────────────

  override async handleToolStart(
    tool: Serialized,
    input: string,
    runId: string,
    parentRunId?: string,
    tags?: string[],
    metadata?: Record<string, unknown>,
    _runName?: string,
  ): Promise<void> {
    try {
      const event = this._startEvent(
        runId,
        parentRunId,
        EventType.TOOL,
        tool as unknown as Record<string, unknown>,
        metadata,
        tags,
      );
      event.toolInput = input;
    } catch {
      // silently ignore tracing errors
    }
  }

  override async handleToolEnd(
    output: string,
    runId: string,
    _parentRunId?: string,
    _tags?: string[],
  ): Promise<void> {
    try {
      const event = this._events.get(runId);
      if (!event) return;
      event.endTimeNs = nanoTimestamp();
      event.toolOutput = String(output);
      await this._finishAndSend(runId);
    } catch {
      // silently ignore tracing errors
    }
  }

  override async handleToolError(
    err: Error,
    runId: string,
    _parentRunId?: string,
    _tags?: string[],
  ): Promise<void> {
    try {
      const event = this._events.get(runId);
      if (!event) return;
      event.endTimeNs = nanoTimestamp();
      const formatted = formatError(err);
      event.error = {
        type: err.constructor.name,
        message: formatted.message,
        traceback: formatted.traceback,
      };
      await this._finishAndSend(runId);
    } catch {
      // silently ignore tracing errors
    }
  }

  // ── Retriever callbacks ────────────────────────────────────────

  override async handleRetrieverStart(
    retriever: Serialized,
    query: string,
    runId: string,
    parentRunId?: string,
    tags?: string[],
    metadata?: Record<string, unknown>,
    _name?: string,
  ): Promise<void> {
    try {
      const event = this._startEvent(
        runId,
        parentRunId,
        EventType.RETRIEVAL,
        retriever as unknown as Record<string, unknown>,
        metadata,
        tags,
      );
      event.query = query;
    } catch {
      // silently ignore tracing errors
    }
  }

  override async handleRetrieverEnd(
    documents: DocumentInterface[],
    runId: string,
    _parentRunId?: string,
    _tags?: string[],
  ): Promise<void> {
    try {
      const event = this._events.get(runId);
      if (!event) return;
      event.endTimeNs = nanoTimestamp();
      event.documents = documents.map((doc) => ({
        page_content: doc.pageContent,
        metadata: doc.metadata,
      }));
      await this._finishAndSend(runId);
    } catch {
      // silently ignore tracing errors
    }
  }

  override async handleRetrieverError(
    err: Error,
    runId: string,
    _parentRunId?: string,
    _tags?: string[],
  ): Promise<void> {
    try {
      const event = this._events.get(runId);
      if (!event) return;
      event.endTimeNs = nanoTimestamp();
      const formatted = formatError(err);
      event.error = {
        type: err.constructor.name,
        message: formatted.message,
        traceback: formatted.traceback,
      };
      await this._finishAndSend(runId);
    } catch {
      // silently ignore tracing errors
    }
  }

  // ── Agent callbacks ────────────────────────────────────────────

  override async handleAgentAction(
    action: AgentAction,
    runId: string,
    parentRunId?: string,
    _tags?: string[],
  ): Promise<void> {
    try {
      let event = this._events.get(runId);
      if (!event) {
        event = this._startEvent(
          runId,
          parentRunId,
          EventType.AGENT,
          {},
          undefined,
          undefined,
          "agent",
        );
      }
      if (event.agentActions === null) {
        event.agentActions = [];
      }
      event.agentActions.push({
        tool: action.tool,
        tool_input: String(action.toolInput),
        log: action.log,
      });
    } catch {
      // silently ignore tracing errors
    }
  }

  override async handleAgentEnd(
    finish: AgentFinish,
    runId: string,
    _parentRunId?: string,
    _tags?: string[],
  ): Promise<void> {
    try {
      const event = this._events.get(runId);
      if (!event) return;
      event.endTimeNs = nanoTimestamp();
      event.agentFinish = {
        output: String(finish.returnValues),
        log: finish.log,
      };
      event.outputs = finish.returnValues;
      await this._finishAndSend(runId);
    } catch {
      // silently ignore tracing errors
    }
  }

  async close(): Promise<void> {
    await this._client.close();
  }
}
