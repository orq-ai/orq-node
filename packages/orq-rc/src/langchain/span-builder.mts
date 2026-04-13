/**
 * Convert completed LangChain events to OTLP-compatible span dicts.
 *
 * Produces the same JSON structure as OpenTelemetry's OTLPSpanExporter
 * (resourceSpans > scopeSpans > spans) so the backend's LangSmith adapter
 * can parse it. Detection keys: scope.name="langsmith", langsmith.span.kind,
 * and root span with empty parentSpanId -> SpanTypes.Trace.
 */

import { EventType, InFlightEvent } from "./models.mjs";
import { nanoTimestamp } from "./utils.mjs";

// ── OTLP attribute encoding ──────────────────────────────────────

interface OtlpAttribute {
  key: string;
  value: Record<string, unknown>;
}

function strAttr(key: string, value: string): OtlpAttribute {
  return { key, value: { stringValue: value } };
}

function intAttr(key: string, value: number): OtlpAttribute {
  return { key, value: { intValue: String(value) } };
}

function boolAttr(key: string, value: boolean): OtlpAttribute {
  return { key, value: { boolValue: value } };
}

function doubleAttr(key: string, value: number): OtlpAttribute {
  return { key, value: { doubleValue: value } };
}

function arrayAttr(key: string, values: string[]): OtlpAttribute {
  return {
    key,
    value: {
      arrayValue: {
        values: values.map((v) => ({ stringValue: v })),
      },
    },
  };
}

function encodeAttr(key: string, value: unknown): OtlpAttribute {
  if (typeof value === "boolean") return boolAttr(key, value);
  if (typeof value === "number") {
    return Number.isInteger(value)
      ? intAttr(key, value)
      : doubleAttr(key, value);
  }
  if (Array.isArray(value)) {
    return arrayAttr(
      key,
      value.map((v: unknown) => String(v)),
    );
  }
  return strAttr(key, String(value));
}

// ── Span kind mapping ────────────────────────────────────────────

const SPAN_KIND_MAP: Record<string, string> = {
  [EventType.LLM]: "llm",
  [EventType.CHAIN]: "chain",
  [EventType.AGENT]: "chain",
  [EventType.TOOL]: "tool",
  [EventType.RETRIEVAL]: "chain",
};

const OPERATION_NAME_MAP: Record<string, string> = {
  [EventType.LLM]: "chat",
  [EventType.CHAIN]: "chain",
  [EventType.AGENT]: "chain",
  [EventType.TOOL]: "execute_tool",
  [EventType.RETRIEVAL]: "chain",
};

// ── Provider extraction ──────────────────────────────────────────

function extractProvider(
  serialized: Record<string, unknown> | null,
): string | null {
  if (!serialized) return null;
  const idParts = serialized["id"] as string[] | undefined;
  if (!idParts) return null;

  const providers = [
    "openai",
    "anthropic",
    "google",
    "cohere",
    "mistral",
    "bedrock",
    "azure",
  ];
  for (const part of idParts) {
    const partLower = String(part).toLowerCase();
    for (const provider of providers) {
      if (partLower.includes(provider)) return provider;
    }
  }
  return null;
}

// ── Build a single OTLP span ────────────────────────────────────

export function buildOtlpSpan(
  event: InFlightEvent,
): Record<string, unknown> {
  const langsmithKind = SPAN_KIND_MAP[event.eventType] ?? "chain";
  let operationName = OPERATION_NAME_MAP[event.eventType] ?? "chain";

  if (event.eventType === EventType.LLM) {
    operationName = event.messages ? "chat" : "completion";
  }

  const attrs = buildAttributes(event, langsmithKind, operationName);

  const span: Record<string, unknown> = {
    traceId: event.traceId,
    spanId: event.runId,
    traceState: "",
    parentSpanId: event.parentRunId ?? "",
    name: event.name,
    kind: 1, // SPAN_KIND_INTERNAL
    startTimeUnixNano: event.startTimeNs || nanoTimestamp(),
    endTimeUnixNano: event.endTimeNs ?? nanoTimestamp(),
    attributes: attrs,
    droppedAttributesCount: 0,
    events: buildEvents(event),
    droppedEventsCount: 0,
    links: [],
    droppedLinksCount: 0,
    status: { message: "", code: 1 },
  };

  if (event.error) {
    span["status"] = { message: event.error.message, code: 2 };
  }

  return span;
}

// ── Attributes ───────────────────────────────────────────────────

function buildAttributes(
  event: InFlightEvent,
  langsmithKind: string,
  operationName: string,
): OtlpAttribute[] {
  const attrs: OtlpAttribute[] = [];

  attrs.push(strAttr("langsmith.span.kind", langsmithKind));
  attrs.push(strAttr("langsmith.trace.name", event.name));
  attrs.push(strAttr("langsmith.trace.session_name", "default"));
  attrs.push(strAttr("gen_ai.operation.name", operationName));
  attrs.push(
    strAttr(
      "gen_ai.system",
      extractProvider(event.serialized) ?? "langchain",
    ),
  );

  if (event.eventType === EventType.LLM) {
    addLlmAttributes(attrs, event);
  }

  if (event.eventType === EventType.TOOL) {
    const toolName = event.serialized["name"];
    if (typeof toolName === "string") {
      attrs.push(strAttr("gen_ai.serialized.name", toolName));
    }
  }

  if (event.metadata) {
    for (const [k, v] of Object.entries(event.metadata)) {
      attrs.push(encodeAttr(`langsmith.metadata.${k}`, v));
    }
  }

  if (event.tags) {
    for (const tag of event.tags) {
      attrs.push(strAttr("langsmith.span.tags", tag));
    }
  }

  const prompt = buildPrompt(event);
  if (prompt != null) {
    attrs.push(strAttr("gen_ai.prompt", JSON.stringify(prompt)));
  }

  const completion = buildCompletion(event);
  if (completion != null) {
    attrs.push(strAttr("gen_ai.completion", JSON.stringify(completion)));
  }

  return attrs;
}

function addLlmAttributes(
  attrs: OtlpAttribute[],
  event: InFlightEvent,
): void {
  if (event.modelName) {
    attrs.push(strAttr("gen_ai.serialized.name", event.name));
    attrs.push(strAttr("gen_ai.request.model", event.modelName));
  }

  const provider = extractProvider(event.serialized);
  if (provider) {
    for (let i = 0; i < attrs.length; i++) {
      if (attrs[i]!.key === "gen_ai.system") {
        attrs[i] = strAttr("gen_ai.system", provider);
        break;
      }
    }
  }

  if (event.modelParameters) {
    for (const [k, v] of Object.entries(event.modelParameters)) {
      if (v != null) {
        attrs.push(encodeAttr(`langsmith.metadata.${k}`, v));
      }
    }
  }

  if (event.metadata) {
    if (!("ls_provider" in event.metadata) && provider) {
      attrs.push(strAttr("langsmith.metadata.ls_provider", provider));
    }
    if (!("ls_model_name" in event.metadata) && event.modelName) {
      attrs.push(
        strAttr("langsmith.metadata.ls_model_name", event.modelName),
      );
    }
    if (!("ls_model_type" in event.metadata)) {
      attrs.push(
        strAttr(
          "langsmith.metadata.ls_model_type",
          event.messages ? "chat" : "completion",
        ),
      );
    }
  }

  if (event.tokenUsage) {
    const usage = event.tokenUsage;
    if ("prompt_tokens" in usage) {
      attrs.push(intAttr("gen_ai.usage.input_tokens", usage["prompt_tokens"]!));
    }
    if ("completion_tokens" in usage) {
      attrs.push(
        intAttr("gen_ai.usage.output_tokens", usage["completion_tokens"]!),
      );
    }
    if ("total_tokens" in usage) {
      attrs.push(intAttr("gen_ai.usage.total_tokens", usage["total_tokens"]!));
    }
  }
}

// ── Prompt / Completion builders ─────────────────────────────────

function buildPrompt(event: InFlightEvent): unknown {
  if (event.eventType === EventType.LLM) {
    if (event.messages) return { messages: event.messages };
    if (event.prompts) return { prompts: event.prompts };
  }
  if (
    event.eventType === EventType.CHAIN ||
    event.eventType === EventType.AGENT
  ) {
    return event.inputs;
  }
  if (event.eventType === EventType.TOOL) {
    if (event.toolInput != null) return { input: event.toolInput };
  }
  if (event.eventType === EventType.RETRIEVAL) {
    if (event.query != null) return { query: event.query };
  }
  return null;
}

function buildCompletion(event: InFlightEvent): unknown {
  if (event.eventType === EventType.LLM) {
    const output: Record<string, unknown> = {};
    if (event.responseChoices) output["choices"] = event.responseChoices;
    if (event.tokenUsage) output["usage"] = event.tokenUsage;
    return Object.keys(output).length > 0 ? output : null;
  }
  if (
    event.eventType === EventType.CHAIN ||
    event.eventType === EventType.AGENT
  ) {
    return event.outputs;
  }
  if (event.eventType === EventType.TOOL) {
    if (event.toolOutput != null) return { output: event.toolOutput };
  }
  if (event.eventType === EventType.RETRIEVAL) {
    if (event.documents != null) return { documents: event.documents };
  }
  return null;
}

// ── Events (for errors) ─────────────────────────────────────────

function buildEvents(event: InFlightEvent): Record<string, unknown>[] {
  const events: Record<string, unknown>[] = [];
  if (event.error) {
    events.push({
      timeUnixNano: event.endTimeNs ?? nanoTimestamp(),
      name: "exception",
      attributes: [
        strAttr("exception.type", event.error.type),
        strAttr("exception.message", event.error.message),
        strAttr("exception.stacktrace", event.error.traceback),
      ],
      droppedAttributesCount: 0,
    });
  }
  return events;
}

// ── Wrap spans in the full OTLP envelope ─────────────────────────

export function wrapInOtlpEnvelope(
  spans: Record<string, unknown>[],
): Record<string, unknown> {
  return {
    resourceSpans: [
      {
        resource: {
          attributes: [
            strAttr("telemetry.sdk.language", "javascript"),
            strAttr("telemetry.sdk.name", "opentelemetry"),
            strAttr("telemetry.sdk.version", "1.39.1"),
            strAttr("service.name", "unknown_service"),
          ],
          droppedAttributesCount: 0,
        },
        scopeSpans: [
          {
            scope: {
              name: "langsmith",
              version: "",
              attributes: [],
              droppedAttributesCount: 0,
            },
            spans,
          },
        ],
      },
    ],
  };
}
