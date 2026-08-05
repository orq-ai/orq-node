# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesUsage

The usage information for the request.

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesUsage } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesUsage = {
  promptTokens: 7439.98,
  totalTokens: 2627.36,
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `promptTokens`                                  | *number*                                        | :heavy_check_mark:                              | The number of tokens used by the prompt.        |
| `totalTokens`                                   | *number*                                        | :heavy_check_mark:                              | The total number of tokens used by the request. |