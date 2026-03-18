# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody182

A text output from the model.

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody182,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody182 =
    {
      text: "<value>",
      annotations: [
        {
          url: "https://fine-oil.name",
          startIndex: 496638,
          endIndex: 93619,
          title: "<value>",
        },
      ],
      logprobs: [
        {
          token: "<value>",
          logprob: 2241.88,
          bytes: [
            548550,
            755257,
            508647,
          ],
          topLogprobs: [],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                                                                                                                                                                     | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody18AttributesOpenresponsesOutputType](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidcontentannotationqueueresponse200applicationjsonresponsebody18attributesopenresponsesoutputtype.md) | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                         | The type of the output text. Always `output_text`.                                                                                                                                                                                                                                                                                         |
| `text`                                                                                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                         | The text output from the model.                                                                                                                                                                                                                                                                                                            |
| `annotations`                                                                                                                                                                                                                                                                                                                              | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody18Annotations](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidcontentannotationqueueresponse200applicationjsonresponsebody18annotations.md)[]                                           | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                         | The annotations of the text output.                                                                                                                                                                                                                                                                                                        |
| `logprobs`                                                                                                                                                                                                                                                                                                                                 | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody18Logprobs](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidcontentannotationqueueresponse200applicationjsonresponsebody18logprobs.md)[]                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                                                                                                                                        |