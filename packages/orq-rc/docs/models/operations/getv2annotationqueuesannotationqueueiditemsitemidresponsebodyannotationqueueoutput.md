# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueOutput

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueOutput,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueOutput =
    {
      object: "list",
      data: [],
      model: "Explorer",
      usage: {
        promptTokens: 5077.06,
        totalTokens: 8561.95,
      },
    };
```

## Fields

| Field                                                                                                                                                                                                        | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `object`                                                                                                                                                                                                     | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyObject](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyobject.md)                             | :heavy_check_mark:                                                                                                                                                                                           | N/A                                                                                                                                                                                                          |
| `data`                                                                                                                                                                                                       | [operations.ResponseBodyData](../../models/operations/responsebodydata.md)[]                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                           | N/A                                                                                                                                                                                                          |
| `model`                                                                                                                                                                                                      | *string*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | ID of the model to used.                                                                                                                                                                                     |
| `usage`                                                                                                                                                                                                      | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueUsage](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueusage.md) | :heavy_check_mark:                                                                                                                                                                                           | The usage information for the request.                                                                                                                                                                       |