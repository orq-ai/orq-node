# RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse2

A text output from the model.

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse2 } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse2 = {
  text: "<value>",
  annotations: [
    {
      url: "https://unwilling-cake.biz",
      startIndex: 463783,
      endIndex: 826194,
      title: "<value>",
    },
  ],
  logprobs: [
    {
      token: "<value>",
      logprob: 4761.27,
      bytes: [],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 5740.52,
          bytes: [
            468000,
            893105,
            650315,
          ],
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                                   | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody4AttributesType](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200applicationjsonresponsebody4attributestype.md) | :heavy_minus_sign:                                                                                                                                                                                                                                       | The type of the output text. Always `output_text`.                                                                                                                                                                                                       |
| `text`                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                       | The text output from the model.                                                                                                                                                                                                                          |
| `annotations`                                                                                                                                                                                                                                            | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponseAnnotations](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponseannotations.md)[]                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                       | The annotations of the text output.                                                                                                                                                                                                                      |
| `logprobs`                                                                                                                                                                                                                                               | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponseLogprobs](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponselogprobs.md)[]                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                      |