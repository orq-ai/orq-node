# UpdateDatasetResponseBody

Dataset updated.

## Example Usage

```typescript
import { UpdateDatasetResponseBody } from "@orq-ai/node/models/operations";

let value: UpdateDatasetResponseBody = {
  id: "c256a445-c911-45cb-bbc4-88bf4ca9cf02",
  displayName: "Aron.Erdman70",
  projectId: "d788a515-285f-4f99-afec-5537fe10e83a",
  workspaceId: "140323a0-1254-44cf-a8f6-1647a7eeb726",
  metadata: {
    totalVersions: 2848.85,
    datapointsCount: 1039.88,
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier of the dataset                                                          |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The display name of the dataset                                                               |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier of the project it belongs to                                            |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier of the workspace it belongs to                                          |
| `createdById`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The unique identifier of the user who created the dataset                                     |
| `updatedById`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The unique identifier of the user who last updated the dataset                                |
| `metadata`                                                                                    | [operations.UpdateDatasetMetadata](../../models/operations/updatedatasetmetadata.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `parentId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The unique identifier for the parent of the committed version                                 |
| `version`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The version of the dataset                                                                    |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the resource was created                                                    |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the resource was last updated                                               |