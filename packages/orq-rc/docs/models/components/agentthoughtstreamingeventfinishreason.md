# AgentThoughtStreamingEventFinishReason

The reason the model stopped generating tokens.

## Example Usage

```typescript
import { AgentThoughtStreamingEventFinishReason } from "@orq-ai/node/models/components";

let value: AgentThoughtStreamingEventFinishReason = "content_filter";
```

## Values

```typescript
"stop" | "length" | "tool_calls" | "content_filter" | "function_call"
```