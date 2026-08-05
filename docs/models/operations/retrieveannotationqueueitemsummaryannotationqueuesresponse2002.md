# RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse2002

A text output from the model.

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse2002 } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse2002 = {
  text: "<value>",
  annotations: [
    {
      url: "https://snoopy-lamp.org/",
      startIndex: 258085,
      endIndex: 34597,
      title: "<value>",
    },
  ],
  logprobs: [
    {
      token: "<value>",
      logprob: 2142.87,
      bytes: [
        83293,
        327257,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 5327.31,
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
| `type`                                                                                                                                                                                                                                                   | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody5AttributesType](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200applicationjsonresponsebody5attributestype.md) | :heavy_minus_sign:                                                                                                                                                                                                                                       | The type of the output text. Always `output_text`.                                                                                                                                                                                                       |
| `text`                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                       | The text output from the model.                                                                                                                                                                                                                          |
| `annotations`                                                                                                                                                                                                                                            | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200Annotations](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200annotations.md)[]                                                             | :heavy_check_mark:                                                                                                                                                                                                                                       | The annotations of the text output.                                                                                                                                                                                                                      |
| `logprobs`                                                                                                                                                                                                                                               | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200Logprobs](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200logprobs.md)[]                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                      |