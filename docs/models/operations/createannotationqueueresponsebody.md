# CreateAnnotationQueueResponseBody

Annotation queue created

## Example Usage

```typescript
import { CreateAnnotationQueueResponseBody } from "@orq-ai/node/models/operations";

let value: CreateAnnotationQueueResponseBody = {
  id: "<id>",
  displayName: "Gaetano49",
  description: "pupil tributary even preside loftily whereas wisely",
  workspaceId: "<id>",
  humanReviewIds: [
    "<value 1>",
    "<value 2>",
  ],
  metadata: {
    itemsCount: 3044.66,
  },
  createdById: "c6b83835-f08c-449d-b9ef-1ba31e1c037a",
  updatedById: "f1530728-bea1-4ff6-9a67-4053175eb13c",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The unique identifier of the annotation queue                                                        |
| `displayName`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | The display name of the annotation queue                                                             |
| `description`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | The description of the annotation queue                                                              |
| `workspaceId`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | The unique identifier of the workspace it belongs to                                                 |
| `projectId`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The project ID. When set, human reviews are resolved from the project automatically                  |
| `humanReviewIds`                                                                                     | *string*[]                                                                                           | :heavy_check_mark:                                                                                   | Legacy: manually selected human review IDs. Used only when project_id is not set                     |
| `metadata`                                                                                           | [operations.CreateAnnotationQueueMetadata](../../models/operations/createannotationqueuemetadata.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `createdById`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | The id of the user who created the resource                                                          |
| `updatedById`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | The id of the user who last updated the resource                                                     |
| `created`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | The date and time the resource was created                                                           |
| `updated`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | The date and time the resource was last updated                                                      |