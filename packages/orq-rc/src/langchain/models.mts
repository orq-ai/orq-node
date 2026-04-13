/**
 * Internal event models for in-flight state tracking between start/end callbacks.
 */

export const EventType = {
  AGENT: "agent",
  CHAIN: "chain",
  LLM: "llm",
  RETRIEVAL: "retrieval",
  TOOL: "tool",
} as const;

export type EventType = (typeof EventType)[keyof typeof EventType];

export interface InFlightEvent {
  runId: string;
  eventType: EventType;
  name: string;
  parentRunId: string | null;
  traceId: string | null;

  // Timing (nanoseconds since epoch, as strings for OTLP)
  startTimeNs: string;
  endTimeNs: string | null;

  // Serialized info from LangChain
  serialized: Record<string, unknown>;
  metadata: Record<string, unknown> | null;
  tags: string[] | null;

  // LLM-specific
  messages: Record<string, unknown>[] | null;
  prompts: string[] | null;
  modelName: string | null;
  modelParameters: Record<string, unknown> | null;
  tokenUsage: Record<string, number> | null;
  responseChoices: Record<string, unknown>[] | null;
  streamingTokens: string[] | null;

  // Chain-specific
  inputs: Record<string, unknown> | null;
  outputs: Record<string, unknown> | null;

  // Tool-specific
  toolInput: string | null;
  toolOutput: string | null;

  // Retrieval-specific
  query: string | null;
  documents: Record<string, unknown>[] | null;

  // Agent-specific
  agentActions: Record<string, unknown>[] | null;
  agentFinish: Record<string, unknown> | null;

  // Error
  error: { type: string; message: string; traceback: string } | null;
}

export function createInFlightEvent(
  params: Pick<InFlightEvent, "runId" | "eventType"> &
    Partial<InFlightEvent>,
): InFlightEvent {
  return {
    name: "",
    parentRunId: null,
    traceId: null,
    startTimeNs: "",
    endTimeNs: null,
    serialized: {},
    metadata: null,
    tags: null,
    messages: null,
    prompts: null,
    modelName: null,
    modelParameters: null,
    tokenUsage: null,
    responseChoices: null,
    streamingTokens: null,
    inputs: null,
    outputs: null,
    toolInput: null,
    toolOutput: null,
    query: null,
    documents: null,
    agentActions: null,
    agentFinish: null,
    error: null,
    ...params,
  };
}
