# AnnotationQueue

## Example Usage

```typescript
import { AnnotationQueue } from "@orq-ai/node/models/components";

let value: AnnotationQueue = {
  id: "<id>",
  displayName: "Reggie71",
  description: "boohoo kindly curl yippee intensely minus boo",
  workspaceId: "<id>",
  humanReviewIds: [
    "<value 1>",
  ],
  metadata: {
    itemsCount: 32563,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | Unique annotation queue identifier assigned by ORQ.                                                |
| `displayName`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The display name of the annotation queue.                                                          |
| `description`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The description of the annotation queue.                                                           |
| `workspaceId`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The unique identifier of the workspace it belongs to.                                              |
| `projectId`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The project ID. When set, human reviews are resolved from the project automatically.               |
| `humanReviewIds`                                                                                   | *string*[]                                                                                         | :heavy_check_mark:                                                                                 | Legacy: manually selected human review IDs. Used only when project_id is not set.                  |
| `metadata`                                                                                         | [components.AnnotationQueueMetadata](../../models/components/annotationqueuemetadata.md)           | :heavy_check_mark:                                                                                 | Aggregate counters for the annotation queue.                                                       |
| `createdById`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The account that created the annotation queue. Unset when created via API key authentication.      |
| `updatedById`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The account that last updated the annotation queue. Unset when updated via API key authentication. |
| `created`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | The date and time the annotation queue was created.                                                |
| `updated`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | The date and time the annotation queue was last updated.                                           |