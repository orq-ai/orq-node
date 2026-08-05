# RetrieveAnnotationQueueItemSummaryLogprobs

The log probability of a token.

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemSummaryLogprobs } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemSummaryLogprobs = {
  token: "<value>",
  logprob: 6277.86,
  bytes: [
    121191,
    751173,
  ],
  topLogprobs: [
    {
      token: "<value>",
      logprob: 3804.66,
      bytes: [],
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `token`                                                                                                                                | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `logprob`                                                                                                                              | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `bytes`                                                                                                                                | *number*[]                                                                                                                             | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `topLogprobs`                                                                                                                          | [operations.RetrieveAnnotationQueueItemSummaryTopLogprobs](../../models/operations/retrieveannotationqueueitemsummarytoplogprobs.md)[] | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |