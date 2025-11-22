# StreamRunAgentDataFinishReason

The reason the model stopped generating tokens.

## Example Usage

```typescript
import { StreamRunAgentDataFinishReason } from "@orq-ai/node/models/operations";

let value: StreamRunAgentDataFinishReason = "length";
```

## Values

```typescript
"stop" | "length" | "tool_calls" | "content_filter" | "function_call"
```