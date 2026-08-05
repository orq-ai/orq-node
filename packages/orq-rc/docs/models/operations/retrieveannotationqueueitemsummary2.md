# RetrieveAnnotationQueueItemSummary2

A text output from the model.

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemSummary2 } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemSummary2 = {
  text: "<value>",
  annotations: [],
  logprobs: [
    {
      token: "<value>",
      logprob: 58.94,
      bytes: [
        622744,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 3804.66,
          bytes: [],
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                                   | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody2AttributesType](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200applicationjsonresponsebody2attributestype.md) | :heavy_minus_sign:                                                                                                                                                                                                                                       | The type of the output text. Always `output_text`.                                                                                                                                                                                                       |
| `text`                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                       | The text output from the model.                                                                                                                                                                                                                          |
| `annotations`                                                                                                                                                                                                                                            | [operations.RetrieveAnnotationQueueItemSummaryAnnotations](../../models/operations/retrieveannotationqueueitemsummaryannotations.md)[]                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                       | The annotations of the text output.                                                                                                                                                                                                                      |
| `logprobs`                                                                                                                                                                                                                                               | [operations.RetrieveAnnotationQueueItemSummaryLogprobs](../../models/operations/retrieveannotationqueueitemsummarylogprobs.md)[]                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                      |