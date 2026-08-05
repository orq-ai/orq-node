# RetrieveAnnotationQueueItemContentLogprobs

The log probability of a token.

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemContentLogprobs } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemContentLogprobs = {
  token: "<value>",
  logprob: 2213.14,
  bytes: [
    201865,
    559204,
    517460,
  ],
  topLogprobs: [
    {
      token: "<value>",
      logprob: 7517.85,
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
| `topLogprobs`                                                                                                                          | [operations.RetrieveAnnotationQueueItemContentTopLogprobs](../../models/operations/retrieveannotationqueueitemcontenttoplogprobs.md)[] | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |