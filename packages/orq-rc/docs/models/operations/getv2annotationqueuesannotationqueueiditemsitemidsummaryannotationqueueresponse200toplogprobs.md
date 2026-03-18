# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200TopLogprobs

The top log probability of a token.

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200TopLogprobs,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200TopLogprobs =
    {
      token: "<value>",
      logprob: 4939.2,
      bytes: [
        729263,
        814415,
      ],
    };
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `token`            | *string*           | :heavy_check_mark: | N/A                |
| `logprob`          | *number*           | :heavy_check_mark: | N/A                |
| `bytes`            | *number*[]         | :heavy_check_mark: | N/A                |