# RetrieveAnnotationQueueItemContentTopLogprobs

The top log probability of a token.

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemContentTopLogprobs } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemContentTopLogprobs = {
  token: "<value>",
  logprob: 4959.3,
  bytes: [
    295519,
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `token`            | *string*           | :heavy_check_mark: | N/A                |
| `logprob`          | *number*           | :heavy_check_mark: | N/A                |
| `bytes`            | *number*[]         | :heavy_check_mark: | N/A                |