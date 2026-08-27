# AnnotationQueueMetadata

Aggregate counters maintained by the service as items are added and removed.

## Example Usage

```typescript
import { AnnotationQueueMetadata } from "@orq-ai/node/models/components";

let value: AnnotationQueueMetadata = {
  itemsCount: 184441,
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `itemsCount`                                       | *number*                                           | :heavy_check_mark:                                 | Number of items currently in the annotation queue. |