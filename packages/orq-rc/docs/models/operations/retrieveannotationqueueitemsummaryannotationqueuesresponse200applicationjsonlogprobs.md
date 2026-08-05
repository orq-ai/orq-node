# RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONLogprobs

The log probability of a token.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONLogprobs,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONLogprobs =
    {
      token: "<value>",
      logprob: 5483.76,
      bytes: [
        506394,
        77472,
        401825,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 1650.9,
          bytes: [
            814913,
            984826,
            666270,
          ],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `token`                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        |
| `logprob`                                                                                                                                                                                                                  | *number*                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        |
| `bytes`                                                                                                                                                                                                                    | *number*[]                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        |
| `topLogprobs`                                                                                                                                                                                                              | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONTopLogprobs](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200applicationjsontoplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        |