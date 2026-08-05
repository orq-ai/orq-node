# RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody2

A text output from the model.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody2,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody2 =
    {
      text: "<value>",
      annotations: [
        {
          url: "https://outlandish-climb.org/",
          startIndex: 831267,
          endIndex: 250033,
          title: "<value>",
        },
      ],
      logprobs: [
        {
          token: "<value>",
          logprob: 7910.35,
          bytes: [
            822046,
            777985,
            909477,
          ],
          topLogprobs: [],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                                   | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody7AttributesType](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200applicationjsonresponsebody7attributestype.md) | :heavy_minus_sign:                                                                                                                                                                                                                                       | The type of the output text. Always `output_text`.                                                                                                                                                                                                       |
| `text`                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                       | The text output from the model.                                                                                                                                                                                                                          |
| `annotations`                                                                                                                                                                                                                                            | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBodyAnnotations](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200applicationjsonresponsebodyannotations.md)[]       | :heavy_check_mark:                                                                                                                                                                                                                                       | The annotations of the text output.                                                                                                                                                                                                                      |
| `logprobs`                                                                                                                                                                                                                                               | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBodyLogprobs](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200applicationjsonresponsebodylogprobs.md)[]             | :heavy_check_mark:                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                      |