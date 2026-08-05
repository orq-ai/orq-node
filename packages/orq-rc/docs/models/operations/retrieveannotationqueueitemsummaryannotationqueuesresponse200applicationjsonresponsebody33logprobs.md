# RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody33Logprobs

The log probability of a token.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody33Logprobs,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody33Logprobs =
    {
      token: "<value>",
      logprob: 5623.42,
      bytes: [
        356996,
        309248,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 3256.32,
          bytes: [
            196137,
            684720,
            171194,
          ],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `token`                                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                                                    |
| `logprob`                                                                                                                                                                                                                                              | *number*                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                                                    |
| `bytes`                                                                                                                                                                                                                                                | *number*[]                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                                                    |
| `topLogprobs`                                                                                                                                                                                                                                          | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody33TopLogprobs](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200applicationjsonresponsebody33toplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                                                    |