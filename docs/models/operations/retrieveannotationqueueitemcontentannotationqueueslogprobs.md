# RetrieveAnnotationQueueItemContentAnnotationQueuesLogprobs

The log probability of a token.

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemContentAnnotationQueuesLogprobs } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemContentAnnotationQueuesLogprobs = {
  token: "<value>",
  logprob: 5663.86,
  bytes: [],
  topLogprobs: [
    {
      token: "<value>",
      logprob: 4215.39,
      bytes: [],
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `token`                                                                                                                                                                | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `logprob`                                                                                                                                                              | *number*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `bytes`                                                                                                                                                                | *number*[]                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `topLogprobs`                                                                                                                                                          | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesTopLogprobs](../../models/operations/retrieveannotationqueueitemcontentannotationqueuestoplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |