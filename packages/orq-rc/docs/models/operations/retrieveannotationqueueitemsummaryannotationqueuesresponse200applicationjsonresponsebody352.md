# RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody352

A text output from the model.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody352,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody352 =
    {
      text: "<value>",
      annotations: [
        {
          url: "https://svelte-dwell.org/",
          startIndex: 621889,
          endIndex: 29202,
          title: "<value>",
        },
      ],
      logprobs: [],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                                     | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody35AttributesType](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200applicationjsonresponsebody35attributestype.md) | :heavy_minus_sign:                                                                                                                                                                                                                                         | The type of the output text. Always `output_text`.                                                                                                                                                                                                         |
| `text`                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                         | The text output from the model.                                                                                                                                                                                                                            |
| `annotations`                                                                                                                                                                                                                                              | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody35Annotations](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200applicationjsonresponsebody35annotations.md)[]     | :heavy_check_mark:                                                                                                                                                                                                                                         | The annotations of the text output.                                                                                                                                                                                                                        |
| `logprobs`                                                                                                                                                                                                                                                 | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody35Logprobs](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200applicationjsonresponsebody35logprobs.md)[]           | :heavy_check_mark:                                                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                                                        |