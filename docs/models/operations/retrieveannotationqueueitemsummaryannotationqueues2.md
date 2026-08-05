# RetrieveAnnotationQueueItemSummaryAnnotationQueues2

A text output from the model.

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemSummaryAnnotationQueues2 } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemSummaryAnnotationQueues2 = {
  text: "<value>",
  annotations: [],
  logprobs: [
    {
      token: "<value>",
      logprob: 2192.22,
      bytes: [
        513537,
        467919,
        981766,
      ],
      topLogprobs: [],
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                                   | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody3AttributesType](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200applicationjsonresponsebody3attributestype.md) | :heavy_minus_sign:                                                                                                                                                                                                                                       | The type of the output text. Always `output_text`.                                                                                                                                                                                                       |
| `text`                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                       | The text output from the model.                                                                                                                                                                                                                          |
| `annotations`                                                                                                                                                                                                                                            | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesAnnotations](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesannotations.md)[]                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                       | The annotations of the text output.                                                                                                                                                                                                                      |
| `logprobs`                                                                                                                                                                                                                                               | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesLogprobs](../../models/operations/retrieveannotationqueueitemsummaryannotationqueueslogprobs.md)[]                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                      |