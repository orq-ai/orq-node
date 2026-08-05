# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson10Output

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson10Output,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson10Output =
    {
      response: {
        object: "list",
        results: [
          {
            object: "rerank",
            index: 4220.77,
            relevanceScore: 333.52,
          },
        ],
      },
    };
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `response`                                                   | [operations.ResponseT](../../models/operations/responset.md) | :heavy_check_mark:                                           | N/A                                                          |
| `filename`                                                   | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |