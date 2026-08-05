# RetrieveAnnotationQueueItemContentAnnotationQueuesResponseLogprobs

The log probability of a token.

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemContentAnnotationQueuesResponseLogprobs } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemContentAnnotationQueuesResponseLogprobs =
  {
    token: "<value>",
    logprob: 7295.25,
    bytes: [
      467481,
      935229,
    ],
    topLogprobs: [
      {
        token: "<value>",
        logprob: 2402.57,
        bytes: [
          573239,
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
| `topLogprobs`                                                                                                                                                                          | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponseTopLogprobs](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponsetoplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |