# StreamAgentDataFinishReason

The reason the model stopped generating tokens.

## Example Usage

```typescript
import { StreamAgentDataFinishReason } from "@orq-ai/node/models/operations";

let value: StreamAgentDataFinishReason = "content_filter";
```

## Values

```typescript
"stop" | "length" | "tool_calls" | "content_filter" | "function_call"
```