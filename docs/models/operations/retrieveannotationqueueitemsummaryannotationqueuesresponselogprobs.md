# RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponseLogprobs

The log probability of a token.

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponseLogprobs } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponseLogprobs =
  {
    token: "<value>",
    logprob: 4626.35,
    bytes: [
      11842,
      861930,
    ],
    topLogprobs: [
      {
        token: "<value>",
        logprob: 5740.52,
        bytes: [
          468000,
          893105,
          650315,
        ],
      },
    ],
  };
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `token`                                                                                                                                                                                | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |
| `logprob`                                                                                                                                                                              | *number*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |
| `bytes`                                                                                                                                                                                | *number*[]                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |
| `topLogprobs`                                                                                                                                                                          | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponseTopLogprobs](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponsetoplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |