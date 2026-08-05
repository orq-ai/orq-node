# RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody82

A text output from the model.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody82,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody82 =
    {
      text: "<value>",
      annotations: [
        {
          url: "https://second-hand-fireplace.biz/",
          startIndex: 754551,
          endIndex: 821073,
          title: "<value>",
        },
      ],
      logprobs: [],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                                   | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody8AttributesType](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200applicationjsonresponsebody8attributestype.md) | :heavy_minus_sign:                                                                                                                                                                                                                                       | The type of the output text. Always `output_text`.                                                                                                                                                                                                       |
| `text`                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                       | The text output from the model.                                                                                                                                                                                                                          |
| `annotations`                                                                                                                                                                                                                                            | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody8Annotations](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200applicationjsonresponsebody8annotations.md)[]     | :heavy_check_mark:                                                                                                                                                                                                                                       | The annotations of the text output.                                                                                                                                                                                                                      |
| `logprobs`                                                                                                                                                                                                                                               | [operations.RetrieveAnnotationQueueItemSummaryAnnotationQueuesResponse200ApplicationJSONResponseBody8Logprobs](../../models/operations/retrieveannotationqueueitemsummaryannotationqueuesresponse200applicationjsonresponsebody8logprobs.md)[]           | :heavy_check_mark:                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                      |