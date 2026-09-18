# ListAnnotationQueueItemsResponseBody

Annotation queue items retrieved.

## Example Usage

```typescript
import { ListAnnotationQueueItemsResponseBody } from "@orq-ai/node/models/operations";

let value: ListAnnotationQueueItemsResponseBody = {
  object: "list",
  data: [
    {
      id: "<id>",
      annotationQueueId: "<id>",
      workspaceId: "<id>",
      spanId: "<id>",
      type: "span",
    },
  ],
  hasMore: true,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `object`                                                                                               | [operations.ListAnnotationQueueItemsObject](../../models/operations/listannotationqueueitemsobject.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `data`                                                                                                 | *operations.ListAnnotationQueueItemsData*[]                                                            | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `hasMore`                                                                                              | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |