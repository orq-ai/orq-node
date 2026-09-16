# RemoveAnnotationQueueItemsRequest

## Example Usage

```typescript
import { RemoveAnnotationQueueItemsRequest } from "@orq-ai/node/models/operations";

let value: RemoveAnnotationQueueItemsRequest = {
  annotationQueueId: "<id>",
  removeAnnotationQueueItemsRequest: {
    spanIds: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `annotationQueueId`                                                                                          | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `removeAnnotationQueueItemsRequest`                                                                          | [components.RemoveAnnotationQueueItemsRequest](../../models/components/removeannotationqueueitemsrequest.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |