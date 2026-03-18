# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse1

A text input to the model.

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse1 } from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse1 =
    {
      text: "<value>",
    };
```

## Fields

| Field                                                                                                                                                                                            | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                           | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueType](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidcontentannotationqueuetype.md) | :heavy_minus_sign:                                                                                                                                                                               | The type of the input item. Always `input_text`.                                                                                                                                                 |
| `text`                                                                                                                                                                                           | *string*                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                               | The text input to the model.                                                                                                                                                                     |