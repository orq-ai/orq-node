# RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody9Logprobs

The log probability of a token.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody9Logprobs,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody9Logprobs =
    {
      token: "<value>",
      logprob: 8174.48,
      bytes: [
        970015,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 8805.13,
          bytes: [],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `token`                                                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                  |
| `logprob`                                                                                                                                                                                                                                            | *number*                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                  |
| `bytes`                                                                                                                                                                                                                                              | *number*[]                                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                  |
| `topLogprobs`                                                                                                                                                                                                                                        | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody9TopLogprobs](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200applicationjsonresponsebody9toplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                  |