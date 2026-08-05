# RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody8TopLogprobs

The top log probability of a token.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody8TopLogprobs,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody8TopLogprobs =
    {
      token: "<value>",
      logprob: 5443.57,
      bytes: [
        821585,
      ],
    };
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `token`            | *string*           | :heavy_check_mark: | N/A                |
| `logprob`          | *number*           | :heavy_check_mark: | N/A                |
| `bytes`            | *number*[]         | :heavy_check_mark: | N/A                |