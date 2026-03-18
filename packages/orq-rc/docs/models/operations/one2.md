# One2

An image input to the model. Learn about [image inputs](/docs/guides/vision)

## Example Usage

```typescript
import { One2 } from "@orq-ai/node/models/operations";

let value: One2 = {};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                 | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemId1Type](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemid1type.md) | :heavy_minus_sign:                                                                                                                                     | The type of the input item. Always `input_image`.                                                                                                      |
| `imageUrl`                                                                                                                                             | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `detail`                                                                                                                                               | [operations.OneDetail](../../models/operations/onedetail.md)                                                                                           | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |