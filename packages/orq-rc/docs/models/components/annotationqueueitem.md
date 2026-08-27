# AnnotationQueueItem

## Example Usage

```typescript
import { AnnotationQueueItem } from "@orq-ai/node/models/components";

let value: AnnotationQueueItem = {
  id: "<id>",
  annotationQueueId: "<id>",
  workspaceId: "<id>",
  type: "<value>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `id`                                                                                  | *string*                                                                              | :heavy_check_mark:                                                                    | Unique annotation queue item identifier assigned by ORQ.                              |
| `annotationQueueId`                                                                   | *string*                                                                              | :heavy_check_mark:                                                                    | The unique identifier of the annotation queue.                                        |
| `workspaceId`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | The unique identifier of the workspace it belongs to.                                 |
| `usedHumanReviewIds`                                                                  | *string*[]                                                                            | :heavy_minus_sign:                                                                    | The unique identifiers of the human reviews that have been used to annotate the item. |
| `type`                                                                                | *string*                                                                              | :heavy_check_mark:                                                                    | The item type. Either `span` or `datapoint`.                                          |
| `spanId`                                                                              | *string*                                                                              | :heavy_minus_sign:                                                                    | The span this item points to. Present when `type` is `span`.                          |
| `traceId`                                                                             | *string*                                                                              | :heavy_minus_sign:                                                                    | The trace identifier this span belongs to.                                            |
| `datapointId`                                                                         | *string*                                                                              | :heavy_minus_sign:                                                                    | The datapoint this item points to. Present when `type` is `datapoint`.                |