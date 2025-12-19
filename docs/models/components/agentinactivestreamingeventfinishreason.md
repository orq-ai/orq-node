# AgentInactiveStreamingEventFinishReason

The reason why the agent execution became inactive

## Example Usage

```typescript
import { AgentInactiveStreamingEventFinishReason } from "@orq-ai/node/models/components";

let value: AgentInactiveStreamingEventFinishReason = "stop";
```

## Values

```typescript
"stop" | "length" | "tool_calls" | "content_filter" | "function_call" | "max_iterations" | "max_time"
```