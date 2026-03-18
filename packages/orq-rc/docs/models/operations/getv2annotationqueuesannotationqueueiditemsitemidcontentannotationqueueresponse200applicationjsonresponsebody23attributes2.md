# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody23Attributes2

A text output from the model.

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody23Attributes2,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody23Attributes2 =
    {
      text: "<value>",
      annotations: [
        {
          url: "https://wilted-editor.info/",
          startIndex: 349832,
          endIndex: 442525,
          title: "<value>",
        },
      ],
      logprobs: [
        {
          token: "<value>",
          logprob: 3861.22,
          bytes: [],
          topLogprobs: [
            {
              token: "<value>",
              logprob: 6619.95,
              bytes: [
                936772,
                519005,
              ],
            },
          ],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                                                                                                                         | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody23AttributesOpenresponsesOutput42Type](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidcontentannotationqueueresponse200applicationjsonresponsebody23attributesopenresponsesoutput42type.md) | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                             | The type of the output text. Always `output_text`.                                                                                                                                                                                                                                                                                             |
| `text`                                                                                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                             | The text output from the model.                                                                                                                                                                                                                                                                                                                |
| `annotations`                                                                                                                                                                                                                                                                                                                                  | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody23AttributesAnnotations](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidcontentannotationqueueresponse200applicationjsonresponsebody23attributesannotations.md)[]                           | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                             | The annotations of the text output.                                                                                                                                                                                                                                                                                                            |
| `logprobs`                                                                                                                                                                                                                                                                                                                                     | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody23AttributesLogprobs](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidcontentannotationqueueresponse200applicationjsonresponsebody23attributeslogprobs.md)[]                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                                                                                                                                            |