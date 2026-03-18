# GetV2AnnotationQueuesAnnotationQueueIdItemsItemId2AnnotationQueue2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemId2AnnotationQueue2 } from "@orq-ai/node/models/operations";

let value: GetV2AnnotationQueuesAnnotationQueueIdItemsItemId2AnnotationQueue2 =
  {
    type: "image_url",
    imageUrl: {
      url: "https://picsum.photos/id/1/200/300",
    },
  };
```

## Fields

| Field                                                                                                                                                                                        | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                       | *"image_url"*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                           | N/A                                                                                                                                                                                          |
| `imageUrl`                                                                                                                                                                                   | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemId2AnnotationQueueImageUrl](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemid2annotationqueueimageurl.md) | :heavy_check_mark:                                                                                                                                                                           | N/A                                                                                                                                                                                          |