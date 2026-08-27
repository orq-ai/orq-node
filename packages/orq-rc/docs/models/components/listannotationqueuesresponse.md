# ListAnnotationQueuesResponse

## Example Usage

```typescript
import { ListAnnotationQueuesResponse } from "@orq-ai/node/models/components";

let value: ListAnnotationQueuesResponse = {
  object: "<value>",
  data: [
    {
      id: "<id>",
      displayName: "Victoria29",
      description: "unpleasant till hunt that upliftingly stage around confute",
      workspaceId: "<id>",
      humanReviewIds: [
        "<value 1>",
      ],
      metadata: {
        itemsCount: 32563,
      },
    },
  ],
  hasMore: true,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `object`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | Object discriminator for list responses; always `list`.                            |
| `data`                                                                             | [components.AnnotationQueue](../../models/components/annotationqueue.md)[]         | :heavy_check_mark:                                                                 | Page of annotation queues.                                                         |
| `hasMore`                                                                          | *boolean*                                                                          | :heavy_check_mark:                                                                 | Whether more annotation queues are available in the selected pagination direction. |