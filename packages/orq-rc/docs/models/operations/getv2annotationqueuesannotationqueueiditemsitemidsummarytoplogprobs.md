# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryTopLogprobs

The top log probability of a token.

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryTopLogprobs } from "@orq-ai/node/models/operations";

let value: GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryTopLogprobs =
  {
    token: "<value>",
    logprob: 3329.92,
    bytes: [
      711233,
      701425,
      34553,
    ],
  };
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `token`            | *string*           | :heavy_check_mark: | N/A                |
| `logprob`          | *number*           | :heavy_check_mark: | N/A                |
| `bytes`            | *number*[]         | :heavy_check_mark: | N/A                |