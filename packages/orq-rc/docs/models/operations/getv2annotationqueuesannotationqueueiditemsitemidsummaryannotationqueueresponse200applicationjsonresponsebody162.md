# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200ApplicationJSONResponseBody162

A text output from the model.

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200ApplicationJSONResponseBody162,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200ApplicationJSONResponseBody162 =
    {
      text: "<value>",
      annotations: [
        {
          url: "https://dim-resolve.org/",
          startIndex: 605914,
          endIndex: 984080,
          title: "<value>",
        },
      ],
      logprobs: [
        {
          token: "<value>",
          logprob: 7093.92,
          bytes: [
            591976,
          ],
          topLogprobs: [],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                                                                               | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200ApplicationJSONResponseBody16AttributesType](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidsummaryannotationqueueresponse200applicationjsonresponsebody16attributestype.md) | :heavy_minus_sign:                                                                                                                                                                                                                                                                                   | The type of the output text. Always `output_text`.                                                                                                                                                                                                                                                   |
| `text`                                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                                                   | The text output from the model.                                                                                                                                                                                                                                                                      |
| `annotations`                                                                                                                                                                                                                                                                                        | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200ApplicationJSONResponseBody16Annotations](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidsummaryannotationqueueresponse200applicationjsonresponsebody16annotations.md)[]     | :heavy_check_mark:                                                                                                                                                                                                                                                                                   | The annotations of the text output.                                                                                                                                                                                                                                                                  |
| `logprobs`                                                                                                                                                                                                                                                                                           | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200ApplicationJSONResponseBody16Logprobs](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidsummaryannotationqueueresponse200applicationjsonresponsebody16logprobs.md)[]           | :heavy_check_mark:                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                  |