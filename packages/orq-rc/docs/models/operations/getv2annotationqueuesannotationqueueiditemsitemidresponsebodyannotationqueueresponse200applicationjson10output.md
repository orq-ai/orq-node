# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson10Output

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson10Output,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson10Output =
    {
      response: {
        object: "list",
        results: [
          {
            object: "rerank",
            index: 6480.61,
            relevanceScore: 7365.56,
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