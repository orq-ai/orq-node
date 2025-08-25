# FinishReason

The reason the model stopped generating tokens.

## Example Usage

```typescript
import { FinishReason } from "@orq-ai/node/models/operations";

let value: FinishReason = "content_filter";
```

## Values

```typescript
"stop" | "length" | "tool_calls" | "content_filter" | "function_call"
```