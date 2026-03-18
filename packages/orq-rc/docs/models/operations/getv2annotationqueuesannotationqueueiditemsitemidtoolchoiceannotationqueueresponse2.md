# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdToolChoiceAnnotationQueueResponse2

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdToolChoiceAnnotationQueueResponse2,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdToolChoiceAnnotationQueueResponse2 =
    {
      function: {
        name: "<value>",
      },
    };
```

## Fields

| Field                                                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                                     | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdToolChoiceAnnotationQueueResponse200ApplicationJSONType](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidtoolchoiceannotationqueueresponse200applicationjsontype.md) | :heavy_minus_sign:                                                                                                                                                                                                                                         | The type of the tool. Currently, only function is supported.                                                                                                                                                                                               |
| `function`                                                                                                                                                                                                                                                 | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdToolChoiceAnnotationQueueResponseFunction](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidtoolchoiceannotationqueueresponsefunction.md)                             | :heavy_check_mark:                                                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                                                        |