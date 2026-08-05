# RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody272

A text output from the model.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody272,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody272 =
    {
      text: "<value>",
      annotations: [],
      logprobs: [
        {
          token: "<value>",
          logprob: 6514.34,
          bytes: [
            122453,
            360083,
            116468,
          ],
          topLogprobs: [
            {
              token: "<value>",
              logprob: 5777.09,
              bytes: [
                409320,
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
| `type`                                                                                                                                                                                                                                                     | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody27AttributesType](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200applicationjsonresponsebody27attributestype.md) | :heavy_minus_sign:                                                                                                                                                                                                                                         | The type of the output text. Always `output_text`.                                                                                                                                                                                                         |
| `text`                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                         | The text output from the model.                                                                                                                                                                                                                            |
| `annotations`                                                                                                                                                                                                                                              | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody27Annotations](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200applicationjsonresponsebody27annotations.md)[]     | :heavy_check_mark:                                                                                                                                                                                                                                         | The annotations of the text output.                                                                                                                                                                                                                        |
| `logprobs`                                                                                                                                                                                                                                                 | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody27Logprobs](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200applicationjsonresponsebody27logprobs.md)[]           | :heavy_check_mark:                                                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                                                        |