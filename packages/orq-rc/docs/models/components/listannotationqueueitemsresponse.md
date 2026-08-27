# ListAnnotationQueueItemsResponse

## Example Usage

```typescript
import { ListAnnotationQueueItemsResponse } from "@orq-ai/node/models/components";

let value: ListAnnotationQueueItemsResponse = {
  object: "<value>",
  data: [
    {
      id: "<id>",
      annotationQueueId: "<id>",
      workspaceId: "<id>",
      type: "<value>",
    },
  ],
  hasMore: true,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `object`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | Object discriminator for list responses; always `list`.                            |
| `data`                                                                             | [components.AnnotationQueueItem](../../models/components/annotationqueueitem.md)[] | :heavy_check_mark:                                                                 | Page of annotation queue items.                                                    |
| `hasMore`                                                                          | *boolean*                                                                          | :heavy_check_mark:                                                                 | Whether more items are available in the selected pagination direction.             |