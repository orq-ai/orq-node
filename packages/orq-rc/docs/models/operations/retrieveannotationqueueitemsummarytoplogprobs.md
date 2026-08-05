# RetrieveAnnotationQueueItemSummaryTopLogprobs

The top log probability of a token.

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemSummaryTopLogprobs } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemSummaryTopLogprobs = {
  token: "<value>",
  logprob: 8345.65,
  bytes: [
    915628,
    626869,
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `token`            | *string*           | :heavy_check_mark: | N/A                |
| `logprob`          | *number*           | :heavy_check_mark: | N/A                |
| `bytes`            | *number*[]         | :heavy_check_mark: | N/A                |