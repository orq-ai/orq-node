# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse2002

A text output from the model.

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse2002,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse2002 =
    {
      text: "<value>",
      annotations: [
        {
          url: "https://wrong-hydrolyse.net",
          startIndex: 938306,
          endIndex: 843230,
          title: "<value>",
        },
      ],
      logprobs: [
        {
          token: "<value>",
          logprob: 6406.04,
          bytes: [
            158140,
            106096,
            982713,
          ],
          topLogprobs: [],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                                                                                                                       | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody2AttributesOpenresponsesOutput42Type](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidcontentannotationqueueresponse200applicationjsonresponsebody2attributesopenresponsesoutput42type.md) | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                           | The type of the output text. Always `output_text`.                                                                                                                                                                                                                                                                                           |
| `text`                                                                                                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                           | The text output from the model.                                                                                                                                                                                                                                                                                                              |
| `annotations`                                                                                                                                                                                                                                                                                                                                | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200Annotations](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidcontentannotationqueueresponse200annotations.md)[]                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                           | The annotations of the text output.                                                                                                                                                                                                                                                                                                          |
| `logprobs`                                                                                                                                                                                                                                                                                                                                   | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponseLogprobs](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidcontentannotationqueueresponselogprobs.md)[]                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                                                                                                                          |