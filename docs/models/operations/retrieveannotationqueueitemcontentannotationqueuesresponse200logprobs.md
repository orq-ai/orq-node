# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200Logprobs

The log probability of a token.

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200Logprobs } from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200Logprobs = {
    token: "<value>",
    logprob: 7421.05,
    bytes: [
      589588,
      98184,
      306487,
    ],
    topLogprobs: [],
  };
```

## Fields

| Field                                                                                                                                                                                        | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `token`                                                                                                                                                                                      | *string*                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                           | N/A                                                                                                                                                                                          |
| `logprob`                                                                                                                                                                                    | *number*                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                           | N/A                                                                                                                                                                                          |
| `bytes`                                                                                                                                                                                      | *number*[]                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                           | N/A                                                                                                                                                                                          |
| `topLogprobs`                                                                                                                                                                                | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200TopLogprobs](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200toplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                           | N/A                                                                                                                                                                                          |