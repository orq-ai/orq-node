# RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200Logprobs

The log probability of a token.

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200Logprobs } from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200Logprobs = {
    token: "<value>",
    logprob: 1001.9,
    bytes: [],
    topLogprobs: [
      {
        token: "<value>",
        logprob: 5327.31,
        bytes: [],
      },
    ],
  };
```

## Fields

| Field                                                                                                                                                                                        | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `token`                                                                                                                                                                                      | *string*                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                           | N/A                                                                                                                                                                                          |
| `logprob`                                                                                                                                                                                    | *number*                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                           | N/A                                                                                                                                                                                          |
| `bytes`                                                                                                                                                                                      | *number*[]                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                           | N/A                                                                                                                                                                                          |
| `topLogprobs`                                                                                                                                                                                | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200TopLogprobs](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200toplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                           | N/A                                                                                                                                                                                          |