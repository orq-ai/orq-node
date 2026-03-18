# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200ApplicationJSONLogprobs

The log probability of a token.

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200ApplicationJSONLogprobs,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200ApplicationJSONLogprobs =
    {
      token: "<value>",
      logprob: 9386.32,
      bytes: [],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 1337.96,
          bytes: [
            749345,
            117051,
            176205,
          ],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `token`                                                                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                  |
| `logprob`                                                                                                                                                                                                                                                            | *number*                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                  |
| `bytes`                                                                                                                                                                                                                                                              | *number*[]                                                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                  |
| `topLogprobs`                                                                                                                                                                                                                                                        | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200ApplicationJSONTopLogprobs](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidsummaryannotationqueueresponse200applicationjsontoplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                  |