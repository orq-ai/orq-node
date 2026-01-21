# ResponseDoneEventFinishReason

The reason why the agent stopped generating

## Example Usage

```typescript
import { ResponseDoneEventFinishReason } from "@orq-ai/node/models/components";

let value: ResponseDoneEventFinishReason = "function_call";
```

## Values

```typescript
"stop" | "length" | "tool_calls" | "content_filter" | "function_call" | "max_iterations" | "max_time"
```