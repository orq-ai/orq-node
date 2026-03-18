# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueUsage

The usage information for the request.

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueUsage,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueUsage =
    {
      promptTokens: 1835.84,
      totalTokens: 6707.67,
    };
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `promptTokens`                                  | *number*                                        | :heavy_check_mark:                              | The number of tokens used by the prompt.        |
| `totalTokens`                                   | *number*                                        | :heavy_check_mark:                              | The total number of tokens used by the request. |