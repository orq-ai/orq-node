# RetrieveAnnotationQueueItemSummaryAnnotationQueuesLogprobs

The log probability of a token.

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemSummaryAnnotationQueuesLogprobs } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemSummaryAnnotationQueuesLogprobs = {
  token: "<value>",
  logprob: 7488.76,
  bytes: [
    280113,
  ],
  topLogprobs: [],
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `token`                                                                                                                                                                | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `logprob`                                                                                                                                                              | *number*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `bytes`                                                                                                                                                                | *number*[]                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `topLogprobs`                                                                                                                                                          | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesTopLogprobs](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuestoplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |