# ListAnnotationQueuesData

## Example Usage

```typescript
import { ListAnnotationQueuesData } from "@orq-ai/node/models/operations";

let value: ListAnnotationQueuesData = {
  id: "<id>",
  displayName: "Alexandria_Halvorson",
  description: "rule faint seriously even among",
  workspaceId: "<id>",
  humanReviewIds: [
    "<value 1>",
    "<value 2>",
  ],
  metadata: {
    itemsCount: 1298,
  },
  createdById: "486de85b-5602-47bb-8668-07f2b46c0142",
  updatedById: "cb7a9c94-1e2a-4d80-b251-0cefa3b1719c",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | The unique identifier of the annotation queue                                                      |
| `displayName`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The display name of the annotation queue                                                           |
| `description`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The description of the annotation queue                                                            |
| `workspaceId`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The unique identifier of the workspace it belongs to                                               |
| `projectId`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The project ID. When set, human reviews are resolved from the project automatically                |
| `humanReviewIds`                                                                                   | *string*[]                                                                                         | :heavy_check_mark:                                                                                 | Legacy: manually selected human review IDs. Used only when project_id is not set                   |
| `metadata`                                                                                         | [operations.ListAnnotationQueuesMetadata](../../models/operations/listannotationqueuesmetadata.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `createdById`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The id of the user who created the resource                                                        |
| `updatedById`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The id of the user who last updated the resource                                                   |
| `created`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | The date and time the resource was created                                                         |
| `updated`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | The date and time the resource was last updated                                                    |