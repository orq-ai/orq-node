# AddAnnotationQueueItemsResponse

## Example Usage

```typescript
import { AddAnnotationQueueItemsResponse } from "@orq-ai/node/models/components";

let value: AddAnnotationQueueItemsResponse = {
  items: [],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `items`                                                                            | [components.AnnotationQueueItem](../../models/components/annotationqueueitem.md)[] | :heavy_check_mark:                                                                 | Items created by this call. Spans already present in the queue are omitted.        |