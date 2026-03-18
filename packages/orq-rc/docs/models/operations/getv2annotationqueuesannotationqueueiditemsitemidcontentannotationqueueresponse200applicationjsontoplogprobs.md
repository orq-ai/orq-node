# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONTopLogprobs

The top log probability of a token.

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONTopLogprobs,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONTopLogprobs =
    {
      token: "<value>",
      logprob: 2592.59,
      bytes: [
        607473,
      ],
    };
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `token`            | *string*           | :heavy_check_mark: | N/A                |
| `logprob`          | *number*           | :heavy_check_mark: | N/A                |
| `bytes`            | *number*[]         | :heavy_check_mark: | N/A                |