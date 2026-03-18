# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200ApplicationJSONResponseBody272

A text output from the model.

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200ApplicationJSONResponseBody272,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200ApplicationJSONResponseBody272 =
    {
      text: "<value>",
      annotations: [
        {
          url: "https://crafty-godfather.com",
          startIndex: 408469,
          endIndex: 97473,
          title: "<value>",
        },
      ],
      logprobs: [
        {
          token: "<value>",
          logprob: 1153.48,
          bytes: [
            707355,
            476586,
            19361,
          ],
          topLogprobs: [],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                                                                               | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200ApplicationJSONResponseBody27AttributesType](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidsummaryannotationqueueresponse200applicationjsonresponsebody27attributestype.md) | :heavy_minus_sign:                                                                                                                                                                                                                                                                                   | The type of the output text. Always `output_text`.                                                                                                                                                                                                                                                   |
| `text`                                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                                                   | The text output from the model.                                                                                                                                                                                                                                                                      |
| `annotations`                                                                                                                                                                                                                                                                                        | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200ApplicationJSONResponseBody27Annotations](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidsummaryannotationqueueresponse200applicationjsonresponsebody27annotations.md)[]     | :heavy_check_mark:                                                                                                                                                                                                                                                                                   | The annotations of the text output.                                                                                                                                                                                                                                                                  |
| `logprobs`                                                                                                                                                                                                                                                                                           | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200ApplicationJSONResponseBody27Logprobs](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidsummaryannotationqueueresponse200applicationjsonresponsebody27logprobs.md)[]           | :heavy_check_mark:                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                  |