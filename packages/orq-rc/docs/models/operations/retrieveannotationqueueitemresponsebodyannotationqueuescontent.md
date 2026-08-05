# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesContent

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesContent } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesContent = {
  token: "<value>",
  logprob: 5095.01,
  bytes: [
    4783.02,
    8662.13,
  ],
  topLogprobs: [
    {
      token: "<value>",
      logprob: 3812.42,
      bytes: [],
    },
  ],
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `token`                                                                                                                                                            | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | The token.                                                                                                                                                         |
| `logprob`                                                                                                                                                          | *number*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | The log probability of this token, if it is within the top 20 most likely tokens. Otherwise, the value -9999.0 is used to signify that the token is very unlikely. |
| `bytes`                                                                                                                                                            | *number*[]                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                 | A list of integers representing the UTF-8 bytes representation of the token.                                                                                       |
| `topLogprobs`                                                                                                                                                      | [operations.ResponseBodyTopLogprobs](../../models/operations/responsebodytoplogprobs.md)[]                                                                         | :heavy_check_mark:                                                                                                                                                 | List of the most likely tokens and their log probability, at this token position.                                                                                  |