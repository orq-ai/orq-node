# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdInputTools

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdInputTools } from "@orq-ai/node/models/operations";

let value: GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdInputTools = {
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                                        | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                       | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdInputAnnotationQueueType](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidinputannotationqueuetype.md) | :heavy_minus_sign:                                                                                                                                                                           | The type of the tool. Currently, only function is supported.                                                                                                                                 |
| `function`                                                                                                                                                                                   | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdInputFunction](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidinputfunction.md)                       | :heavy_check_mark:                                                                                                                                                                           | N/A                                                                                                                                                                                          |