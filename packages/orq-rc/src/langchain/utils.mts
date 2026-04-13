/**
 * Shared helpers for the LangChain callback integration.
 */

import type { BaseMessage } from "@langchain/core/messages";

export function nanoTimestamp(): string {
  return (BigInt(Date.now()) * 1_000_000n).toString();
}

export function extractModelName(
  serialized: Record<string, unknown>,
  extraParams: Record<string, unknown> | undefined,
): string | null {
  const serKwargs = serialized["kwargs"];
  if (serKwargs != null && typeof serKwargs === "object") {
    const kw = serKwargs as Record<string, unknown>;
    if (typeof kw["model_name"] === "string") return kw["model_name"];
    if (typeof kw["model"] === "string") return kw["model"];
  }

  if (typeof serialized["name"] === "string") return serialized["name"];

  const inv = extraParams?.["invocation_params"];
  if (inv != null && typeof inv === "object") {
    const ip = inv as Record<string, unknown>;
    if (typeof ip["model_name"] === "string") return ip["model_name"];
    if (typeof ip["model"] === "string") return ip["model"];
  }

  return null;
}

export function extractModelParameters(
  extraParams: Record<string, unknown> | undefined,
): Record<string, unknown> {
  const inv = extraParams?.["invocation_params"];
  if (inv == null || typeof inv !== "object") return {};

  const ip = inv as Record<string, unknown>;
  const params: Record<string, unknown> = {};
  const keys = [
    "temperature",
    "max_tokens",
    "top_p",
    "top_k",
    "frequency_penalty",
    "presence_penalty",
    "seed",
  ];
  for (const key of keys) {
    if (key in ip) {
      params[key] = ip[key];
    }
  }
  return params;
}

export function normalizeMessages(
  messages: BaseMessage[][],
): Record<string, unknown>[] {
  const result: Record<string, unknown>[] = [];
  for (const group of messages) {
    for (const msg of group) {
      const type = msg._getType();
      switch (type) {
        case "human":
          result.push({ role: "user", content: msg.content });
          break;
        case "system":
          result.push({ role: "system", content: msg.content });
          break;
        case "ai": {
          const entry: Record<string, unknown> = {
            role: "assistant",
            content: msg.content,
          };
          const toolCalls =
            (msg as unknown as Record<string, unknown>)["tool_calls"] ??
            (
              msg.additional_kwargs as Record<string, unknown> | undefined
            )?.["tool_calls"];
          if (toolCalls) {
            entry["tool_calls"] = toolCalls;
          }
          result.push(entry);
          break;
        }
        case "tool":
          result.push({
            role: "tool",
            content: msg.content,
            tool_call_id: (msg as unknown as Record<string, unknown>)[
              "tool_call_id"
            ],
          });
          break;
        case "function":
          result.push({
            role: "function",
            content: msg.content,
            name: (msg as unknown as Record<string, unknown>)["name"],
          });
          break;
        case "chat":
          result.push({
            role: (msg as unknown as Record<string, unknown>)["role"],
            content: msg.content,
          });
          break;
        default:
          result.push({ role: "unknown", content: String(msg.content) });
      }
    }
  }
  return result;
}

export function extractTokenUsage(
  response: unknown,
): Record<string, number> | null {
  const resp = response as Record<string, unknown> | undefined;
  const llmOutput = resp?.["llm_output"];
  if (llmOutput == null || typeof llmOutput !== "object") return null;

  const out = llmOutput as Record<string, unknown>;
  const usage = (out["token_usage"] ?? out["usage"]) as
    | Record<string, unknown>
    | undefined;
  if (usage == null) return null;

  const promptTokens =
    (usage["prompt_tokens"] as number) ??
    (usage["input_tokens"] as number) ??
    0;
  const completionTokens =
    (usage["completion_tokens"] as number) ??
    (usage["output_tokens"] as number) ??
    0;
  const totalTokens =
    (usage["total_tokens"] as number) ?? promptTokens + completionTokens;

  const result: Record<string, number> = {
    prompt_tokens: promptTokens,
    completion_tokens: completionTokens,
    total_tokens: totalTokens,
  };

  const promptDetails = usage["prompt_tokens_details"];
  if (promptDetails != null && typeof promptDetails === "object") {
    const cached = (promptDetails as Record<string, unknown>)[
      "cached_tokens"
    ] as number | undefined;
    if (cached != null) {
      result["cached_tokens"] = cached;
    }
  }

  const completionDetails = usage["completion_tokens_details"];
  if (completionDetails != null && typeof completionDetails === "object") {
    const reasoning = (completionDetails as Record<string, unknown>)[
      "reasoning_tokens"
    ] as number | undefined;
    if (reasoning != null) {
      result["reasoning_tokens"] = reasoning;
    }
  }

  return result;
}

export function resolveSpanName(
  name: string | undefined,
  metadata: Record<string, unknown> | null | undefined,
  serialized: Record<string, unknown> | null | undefined,
  fallback: string = "LangGraph",
): string {
  if (name) return name;
  if (serialized) {
    if (typeof serialized["name"] === "string") return serialized["name"];
    const idList = serialized["id"] as string[] | undefined;
    if (idList && idList.length > 0) {
      const last = idList[idList.length - 1];
      if (last != null) return last;
    }
  }
  if (metadata && typeof metadata["langgraph_node"] === "string") {
    return metadata["langgraph_node"];
  }
  return fallback;
}

export function formatError(error: Error): {
  message: string;
  traceback: string;
} {
  return {
    message: error.message,
    traceback: error.stack ?? "",
  };
}
