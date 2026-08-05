# RetrieveAnnotationQueueItem2AnnotationQueuesResponse2002

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { RetrieveAnnotationQueueItem2AnnotationQueuesResponse2002 } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItem2AnnotationQueuesResponse2002 = {
  type: "image_url",
  imageUrl: {
    url: "https://picsum.photos/id/1/200/300",
  },
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                             | *"image_url"*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `imageUrl`                                                                                                                                                         | [operations.RetrieveAnnotationQueueItem2AnnotationQueuesResponseImageUrl](../../models/operations/retrieveannotationqueueitem2annotationqueuesresponseimageurl.md) | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |