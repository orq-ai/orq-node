# DataFinishReason

The reason why the agent execution became inactive

## Example Usage

```typescript
import { DataFinishReason } from "@orq-ai/node/models/operations";

let value: DataFinishReason = "tool_calls";
```

## Values

```typescript
"stop" | "length" | "tool_calls" | "content_filter" | "function_call" | "max_iterations" | "max_time"
```