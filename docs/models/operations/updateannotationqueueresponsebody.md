# UpdateAnnotationQueueResponseBody

Annotation queue updated

## Example Usage

```typescript
import { UpdateAnnotationQueueResponseBody } from "@orq-ai/node/models/operations";

let value: UpdateAnnotationQueueResponseBody = {
  id: "<id>",
  displayName: "Erin.Bernhard62",
  description: "rebuild modulo gloomy variable lean",
  workspaceId: "<id>",
  humanReviewIds: [
    "<value 1>",
  ],
  metadata: {
    itemsCount: 5417.22,
  },
  createdById: "df3bc2d3-a78c-446b-88b5-e0d9b0c8cf23",
  updatedById: "7ee081fe-d0aa-4ebe-990b-29f1c29cf67c",
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
| `metadata`                                                                                           | [operations.UpdateAnnotationQueueMetadata](../../models/operations/updateannotationqueuemetadata.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `createdById`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | The id of the user who created the resource                                                          |
| `updatedById`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | The id of the user who last updated the resource                                                     |
| `created`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | The date and time the resource was created                                                           |
| `updated`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | The date and time the resource was last updated                                                      |