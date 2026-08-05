# RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody10TopLogprobs

The top log probability of a token.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody10TopLogprobs,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody10TopLogprobs =
    {
      token: "<value>",
      logprob: 2591.87,
      bytes: [
        567284,
      ],
    };
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `token`            | *string*           | :heavy_check_mark: | N/A                |
| `logprob`          | *number*           | :heavy_check_mark: | N/A                |
| `bytes`            | *number*[]         | :heavy_check_mark: | N/A                |