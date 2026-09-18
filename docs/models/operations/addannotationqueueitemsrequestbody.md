# AddAnnotationQueueItemsRequestBody

## Example Usage

```typescript
import { AddAnnotationQueueItemsRequestBody } from "@orq-ai/node/models/operations";

let value: AddAnnotationQueueItemsRequestBody = {
  items: [],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `items`                                                | [operations.Items](../../models/operations/items.md)[] | :heavy_check_mark:                                     | The spans to add to the annotation queue               |