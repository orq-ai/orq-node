# RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody312

A text output from the model.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody312,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody312 =
    {
      text: "<value>",
      annotations: [],
      logprobs: [
        {
          token: "<value>",
          logprob: 5372.09,
          bytes: [
            307210,
            711020,
          ],
          topLogprobs: [
            {
              token: "<value>",
              logprob: 4310.91,
              bytes: [
                415596,
                307335,
              ],
            },
          ],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                                     | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody31AttributesType](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200applicationjsonresponsebody31attributestype.md) | :heavy_minus_sign:                                                                                                                                                                                                                                         | The type of the output text. Always `output_text`.                                                                                                                                                                                                         |
| `text`                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                         | The text output from the model.                                                                                                                                                                                                                            |
| `annotations`                                                                                                                                                                                                                                              | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody31Annotations](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200applicationjsonresponsebody31annotations.md)[]     | :heavy_check_mark:                                                                                                                                                                                                                                         | The annotations of the text output.                                                                                                                                                                                                                        |
| `logprobs`                                                                                                                                                                                                                                                 | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody31Logprobs](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200applicationjsonresponsebody31logprobs.md)[]           | :heavy_check_mark:                                                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                                                        |