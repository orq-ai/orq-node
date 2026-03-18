# Queues

## Example Usage

```typescript
import { Queues } from "@orq-ai/node/models/operations";

let value: Queues = {
  id: "<id>",
  displayName: "General_Schuppe-Leuschke",
  description: "sternly profitable offend excepting annually to",
  workspaceId: "<id>",
  humanReviewIds: [
    "<value 1>",
  ],
  metadata: {
    itemsCount: 7086.83,
  },
  createdById: "7c9af8bd-8a9f-46e3-b4de-f810a85ca226",
  updatedById: "3242032f-1122-4cd5-a2cc-a103e53f4054",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The unique identifier of the annotation queue                                                                    |
| `displayName`                                                                                                    | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The display name of the annotation queue                                                                         |
| `description`                                                                                                    | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The description of the annotation queue                                                                          |
| `workspaceId`                                                                                                    | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The unique identifier of the workspace it belongs to                                                             |
| `projectId`                                                                                                      | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The project ID. When set, human reviews are resolved from the project automatically                              |
| `humanReviewIds`                                                                                                 | *string*[]                                                                                                       | :heavy_check_mark:                                                                                               | Legacy: manually selected human review IDs. Used only when project_id is not set                                 |
| `metadata`                                                                                                       | [operations.PostV2AnnotationQueuesQueryMetadata](../../models/operations/postv2annotationqueuesquerymetadata.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `createdById`                                                                                                    | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The id of the user who created the resource                                                                      |
| `updatedById`                                                                                                    | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The id of the user who last updated the resource                                                                 |
| `created`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_minus_sign:                                                                                               | The date and time the resource was created                                                                       |
| `updated`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_minus_sign:                                                                                               | The date and time the resource was last updated                                                                  |