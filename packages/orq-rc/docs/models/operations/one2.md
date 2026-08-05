# One2

An image input to the model. Learn about [image inputs](/docs/guides/vision)

## Example Usage

```typescript
import { One2 } from "@orq-ai/node/models/operations";

let value: One2 = {};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                     | [operations.RetrieveAnnotationQueueItem1AnnotationQueuesType](../../models/operations/retrieveannotationqueueitem1annotationqueuestype.md) | :heavy_minus_sign:                                                                                                                         | The type of the input item. Always `input_image`.                                                                                          |
| `imageUrl`                                                                                                                                 | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `detail`                                                                                                                                   | [operations.RetrieveAnnotationQueueItem1Detail](../../models/operations/retrieveannotationqueueitem1detail.md)                             | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |