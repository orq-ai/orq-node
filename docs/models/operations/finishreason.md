# FinishReason

The reason why the agent execution became inactive

## Example Usage

```typescript
import { FinishReason } from "@orq-ai/node/models/operations";

let value: FinishReason = "max_iterations";
```

## Values

```typescript
"stop" | "length" | "tool_calls" | "content_filter" | "function_call" | "max_iterations" | "max_time"
```