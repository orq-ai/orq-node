# ResponseBodyFinishReason

The reason the model stopped generating tokens.

## Example Usage

```typescript
import { ResponseBodyFinishReason } from "@orq-ai/node/models/operations";

let value: ResponseBodyFinishReason = "stop";
```

## Values

```typescript
"stop" | "length" | "tool_calls" | "content_filter" | "function_call"
```