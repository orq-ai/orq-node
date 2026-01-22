# CreateCompletionFinishReason

The reason the model stopped generating tokens.

## Example Usage

```typescript
import { CreateCompletionFinishReason } from "@orq-ai/node/models/operations";

let value: CreateCompletionFinishReason = "content_filter";
```

## Values

```typescript
"stop" | "length" | "content_filter" | "tool_calls"
```