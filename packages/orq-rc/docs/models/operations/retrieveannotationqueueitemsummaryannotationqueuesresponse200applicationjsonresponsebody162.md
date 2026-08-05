# RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody162

A text output from the model.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody162,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody162 =
    {
      text: "<value>",
      annotations: [],
      logprobs: [
        {
          token: "<value>",
          logprob: 6735.69,
          bytes: [
            2431,
            206748,
          ],
          topLogprobs: [
            {
              token: "<value>",
              logprob: 7961.25,
              bytes: [
                250366,
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
| `type`                                                                                                                                                                                                                                                     | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody16AttributesType](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200applicationjsonresponsebody16attributestype.md) | :heavy_minus_sign:                                                                                                                                                                                                                                         | The type of the output text. Always `output_text`.                                                                                                                                                                                                         |
| `text`                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                         | The text output from the model.                                                                                                                                                                                                                            |
| `annotations`                                                                                                                                                                                                                                              | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody16Annotations](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200applicationjsonresponsebody16annotations.md)[]     | :heavy_check_mark:                                                                                                                                                                                                                                         | The annotations of the text output.                                                                                                                                                                                                                        |
| `logprobs`                                                                                                                                                                                                                                                 | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody16Logprobs](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200applicationjsonresponsebody16logprobs.md)[]           | :heavy_check_mark:                                                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                                                        |