# RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody212

A text output from the model.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody212,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody212 =
    {
      text: "<value>",
      annotations: [
        {
          url: "https://polished-basket.biz/",
          startIndex: 199309,
          endIndex: 119543,
          title: "<value>",
        },
      ],
      logprobs: [],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                                     | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody21AttributesType](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200applicationjsonresponsebody21attributestype.md) | :heavy_minus_sign:                                                                                                                                                                                                                                         | The type of the output text. Always `output_text`.                                                                                                                                                                                                         |
| `text`                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                         | The text output from the model.                                                                                                                                                                                                                            |
| `annotations`                                                                                                                                                                                                                                              | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody21Annotations](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200applicationjsonresponsebody21annotations.md)[]     | :heavy_check_mark:                                                                                                                                                                                                                                         | The annotations of the text output.                                                                                                                                                                                                                        |
| `logprobs`                                                                                                                                                                                                                                                 | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody21Logprobs](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200applicationjsonresponsebody21logprobs.md)[]           | :heavy_check_mark:                                                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                                                        |