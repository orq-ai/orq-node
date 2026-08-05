# RetrieveAnnotationQueueItemResponseBodyFinishReason

The reason the model stopped generating tokens.

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemResponseBodyFinishReason } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemResponseBodyFinishReason =
  "content_filter";
```

## Values

```typescript
"stop" | "length" | "content_filter" | "tool_calls"
```