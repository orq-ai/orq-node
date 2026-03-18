# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody14Attributes2

A text output from the model.

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody14Attributes2,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody14Attributes2 =
    {
      text: "<value>",
      annotations: [],
      logprobs: [
        {
          token: "<value>",
          logprob: 9317.97,
          bytes: [
            235572,
            43897,
            969233,
          ],
          topLogprobs: [
            {
              token: "<value>",
              logprob: 1389.23,
              bytes: [
                882831,
                708549,
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
| `type`                                                                                                                                                                                                                                                                                                                                         | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody14AttributesOpenresponsesOutput42Type](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidcontentannotationqueueresponse200applicationjsonresponsebody14attributesopenresponsesoutput42type.md) | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                             | The type of the output text. Always `output_text`.                                                                                                                                                                                                                                                                                             |
| `text`                                                                                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                             | The text output from the model.                                                                                                                                                                                                                                                                                                                |
| `annotations`                                                                                                                                                                                                                                                                                                                                  | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody14AttributesAnnotations](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidcontentannotationqueueresponse200applicationjsonresponsebody14attributesannotations.md)[]                           | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                             | The annotations of the text output.                                                                                                                                                                                                                                                                                                            |
| `logprobs`                                                                                                                                                                                                                                                                                                                                     | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody14AttributesLogprobs](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidcontentannotationqueueresponse200applicationjsonresponsebody14attributeslogprobs.md)[]                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                                                                                                                                            |