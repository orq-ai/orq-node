# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody31Attributes2

A text output from the model.

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody31Attributes2,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody31Attributes2 =
    {
      text: "<value>",
      annotations: [
        {
          url: "https://peppery-mainstream.biz",
          startIndex: 882907,
          endIndex: 920199,
          title: "<value>",
        },
      ],
      logprobs: [
        {
          token: "<value>",
          logprob: 4404.39,
          bytes: [],
          topLogprobs: [
            {
              token: "<value>",
              logprob: 3230.27,
              bytes: [
                504112,
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
| `type`                                                                                                                                                                                                                                                                                                                                         | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody31AttributesOpenresponsesOutput42Type](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidcontentannotationqueueresponse200applicationjsonresponsebody31attributesopenresponsesoutput42type.md) | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                             | The type of the output text. Always `output_text`.                                                                                                                                                                                                                                                                                             |
| `text`                                                                                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                             | The text output from the model.                                                                                                                                                                                                                                                                                                                |
| `annotations`                                                                                                                                                                                                                                                                                                                                  | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody31AttributesAnnotations](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidcontentannotationqueueresponse200applicationjsonresponsebody31attributesannotations.md)[]                           | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                             | The annotations of the text output.                                                                                                                                                                                                                                                                                                            |
| `logprobs`                                                                                                                                                                                                                                                                                                                                     | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody31AttributesLogprobs](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidcontentannotationqueueresponse200applicationjsonresponsebody31attributeslogprobs.md)[]                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                                                                                                                                            |