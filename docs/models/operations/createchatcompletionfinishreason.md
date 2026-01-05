# CreateChatCompletionFinishReason

The reason the model stopped generating tokens.

## Example Usage

```typescript
import { CreateChatCompletionFinishReason } from "@orq-ai/node/models/operations";

let value: CreateChatCompletionFinishReason = "length";
```

## Values

```typescript
"stop" | "length" | "tool_calls" | "content_filter" | "function_call"
```