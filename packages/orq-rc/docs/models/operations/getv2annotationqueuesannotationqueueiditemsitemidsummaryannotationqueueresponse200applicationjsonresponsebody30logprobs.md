# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200ApplicationJSONResponseBody30Logprobs

The log probability of a token.

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200ApplicationJSONResponseBody30Logprobs,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200ApplicationJSONResponseBody30Logprobs =
    {
      token: "<value>",
      logprob: 1031.69,
      bytes: [
        10733,
        537598,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 7035.51,
          bytes: [
            312180,
            510232,
            995953,
          ],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `token`                                                                                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                                                              |
| `logprob`                                                                                                                                                                                                                                                                                        | *number*                                                                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                                                              |
| `bytes`                                                                                                                                                                                                                                                                                          | *number*[]                                                                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                                                              |
| `topLogprobs`                                                                                                                                                                                                                                                                                    | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200ApplicationJSONResponseBody30TopLogprobs](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidsummaryannotationqueueresponse200applicationjsonresponsebody30toplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                                                              |