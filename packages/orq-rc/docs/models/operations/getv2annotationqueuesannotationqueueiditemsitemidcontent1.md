# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContent1

Text output from the model

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContent1 } from "@orq-ai/node/models/operations";

let value: GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContent1 = {
  type: "output_text",
  text: "<value>",
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                             | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentType](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidcontenttype.md) | :heavy_check_mark:                                                                                                                                                 | The type of content part                                                                                                                                           |
| `text`                                                                                                                                                             | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | The text content                                                                                                                                                   |
| `annotations`                                                                                                                                                      | *operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotations*[]                                                                                 | :heavy_minus_sign:                                                                                                                                                 | Annotations in the text such as citations                                                                                                                          |
| `logprobs`                                                                                                                                                         | *any*[]                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                 | Log probabilities of the output tokens if requested                                                                                                                |