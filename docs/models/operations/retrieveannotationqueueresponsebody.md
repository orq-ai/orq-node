# RetrieveAnnotationQueueResponseBody

Annotation queue retrieved successfully. Returns the complete annotation queue object.

## Example Usage

```typescript
import { RetrieveAnnotationQueueResponseBody } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueResponseBody = {
  id: "<id>",
  displayName: "Aurore_Reichert",
  description: "stack sniveling anxiously quick-witted puppet regarding",
  workspaceId: "<id>",
  humanReviewIds: [],
  metadata: {
    itemsCount: 6284.51,
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The unique identifier of the annotation queue                                                            |
| `displayName`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The display name of the annotation queue                                                                 |
| `description`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The description of the annotation queue                                                                  |
| `workspaceId`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The unique identifier of the workspace it belongs to                                                     |
| `projectId`                                                                                              | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The project ID. When set, human reviews are resolved from the project automatically                      |
| `humanReviewIds`                                                                                         | *string*[]                                                                                               | :heavy_check_mark:                                                                                       | Legacy: manually selected human review IDs. Used only when project_id is not set                         |
| `metadata`                                                                                               | [operations.RetrieveAnnotationQueueMetadata](../../models/operations/retrieveannotationqueuemetadata.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `createdById`                                                                                            | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The id of the user who created the resource                                                              |
| `updatedById`                                                                                            | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The id of the user who last updated the resource                                                         |
| `created`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_minus_sign:                                                                                       | The date and time the resource was created                                                               |
| `updated`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_minus_sign:                                                                                       | The date and time the resource was last updated                                                          |