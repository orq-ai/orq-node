# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody272

A text output from the model.

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody272,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody272 =
    {
      text: "<value>",
      annotations: [],
      logprobs: [
        {
          token: "<value>",
          logprob: 6553.67,
          bytes: [
            88110,
          ],
          topLogprobs: [
            {
              token: "<value>",
              logprob: 6810.32,
              bytes: [
                289586,
                505747,
                111742,
              ],
            },
          ],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                                                                                                                                                                     | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody27AttributesOpenresponsesOutputType](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidcontentannotationqueueresponse200applicationjsonresponsebody27attributesopenresponsesoutputtype.md) | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                         | The type of the output text. Always `output_text`.                                                                                                                                                                                                                                                                                         |
| `text`                                                                                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                         | The text output from the model.                                                                                                                                                                                                                                                                                                            |
| `annotations`                                                                                                                                                                                                                                                                                                                              | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody27Annotations](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidcontentannotationqueueresponse200applicationjsonresponsebody27annotations.md)[]                                           | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                         | The annotations of the text output.                                                                                                                                                                                                                                                                                                        |
| `logprobs`                                                                                                                                                                                                                                                                                                                                 | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody27Logprobs](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidcontentannotationqueueresponse200applicationjsonresponsebody27logprobs.md)[]                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                                                                                                                                        |