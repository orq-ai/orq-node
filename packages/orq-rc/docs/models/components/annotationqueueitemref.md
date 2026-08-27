# AnnotationQueueItemRef

Span reference accepted by AddAnnotationQueueItems.

## Example Usage

```typescript
import { AnnotationQueueItemRef } from "@orq-ai/node/models/components";

let value: AnnotationQueueItemRef = {
  spanId: "<id>",
  traceId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `spanId`           | *string*           | :heavy_check_mark: | N/A                |
| `traceId`          | *string*           | :heavy_check_mark: | N/A                |