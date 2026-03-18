# GetV2AnnotationQueuesAnnotationQueueIdItemsItemId2AnnotationQueueResponse2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemId2AnnotationQueueResponse2 } from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemId2AnnotationQueueResponse2 = {
    type: "image_url",
    imageUrl: {
      url: "https://picsum.photos/id/1/200/300",
    },
  };
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                         | *"image_url"*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `imageUrl`                                                                                                                                                     | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemId2ImageUrl](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemid2imageurl.md) | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |