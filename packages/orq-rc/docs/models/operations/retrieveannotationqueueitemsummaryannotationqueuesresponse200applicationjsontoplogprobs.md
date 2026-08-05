# RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONTopLogprobs

The top log probability of a token.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONTopLogprobs,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONTopLogprobs =
    {
      token: "<value>",
      logprob: 8051.98,
      bytes: [
        565365,
        850770,
        32902,
      ],
    };
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `token`            | *string*           | :heavy_check_mark: | N/A                |
| `logprob`          | *number*           | :heavy_check_mark: | N/A                |
| `bytes`            | *number*[]         | :heavy_check_mark: | N/A                |