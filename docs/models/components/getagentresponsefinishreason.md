# GetAgentResponseFinishReason

The reason why the agent stopped generating

## Example Usage

```typescript
import { GetAgentResponseFinishReason } from "@orq-ai/node/models/components";

let value: GetAgentResponseFinishReason = "content_filter";
```

## Values

```typescript
"stop" | "length" | "tool_calls" | "content_filter" | "function_call" | "max_iterations" | "max_time"
```