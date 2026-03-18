# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody192

A text output from the model.

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody192,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody192 =
    {
      text: "<value>",
      annotations: [
        {
          url: "https://corrupt-amnesty.biz/",
          startIndex: 777041,
          endIndex: 680674,
          title: "<value>",
        },
      ],
      logprobs: [
        {
          token: "<value>",
          logprob: 9711.59,
          bytes: [
            497614,
            165828,
            795667,
          ],
          topLogprobs: [],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                                                                                                                                                                     | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody19AttributesOpenresponsesOutputType](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidcontentannotationqueueresponse200applicationjsonresponsebody19attributesopenresponsesoutputtype.md) | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                         | The type of the output text. Always `output_text`.                                                                                                                                                                                                                                                                                         |
| `text`                                                                                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                         | The text output from the model.                                                                                                                                                                                                                                                                                                            |
| `annotations`                                                                                                                                                                                                                                                                                                                              | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody19Annotations](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidcontentannotationqueueresponse200applicationjsonresponsebody19annotations.md)[]                                           | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                         | The annotations of the text output.                                                                                                                                                                                                                                                                                                        |
| `logprobs`                                                                                                                                                                                                                                                                                                                                 | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody19Logprobs](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidcontentannotationqueueresponse200applicationjsonresponsebody19logprobs.md)[]                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                                                                                                                                        |