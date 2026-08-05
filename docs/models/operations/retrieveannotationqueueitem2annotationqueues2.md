# RetrieveAnnotationQueueItem2AnnotationQueues2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { RetrieveAnnotationQueueItem2AnnotationQueues2 } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItem2AnnotationQueues2 = {
  type: "image_url",
  imageUrl: {
    url: "https://picsum.photos/id/1/200/300",
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                             | *"image_url"*                                                                                                                                      | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `imageUrl`                                                                                                                                         | [operations.RetrieveAnnotationQueueItem2AnnotationQueuesImageUrl](../../models/operations/retrieveannotationqueueitem2annotationqueuesimageurl.md) | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |