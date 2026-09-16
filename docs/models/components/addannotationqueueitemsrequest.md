# AddAnnotationQueueItemsRequest

## Example Usage

```typescript
import { AddAnnotationQueueItemsRequest } from "@orq-ai/node/models/components";

let value: AddAnnotationQueueItemsRequest = {
  items: [],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `items`                                                                                  | [components.AnnotationQueueItemRef](../../models/components/annotationqueueitemref.md)[] | :heavy_check_mark:                                                                       | The spans to add to the annotation queue.                                                |