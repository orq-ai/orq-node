# UpdateDatasetResponseBody

Dataset updated.

## Example Usage

```typescript
import { UpdateDatasetResponseBody } from "@orq-ai/node/models/operations";

let value: UpdateDatasetResponseBody = {
  id: "115cbbc4-88bf-44ca-a9cf-02c1834b0d78",
  displayName: "Lulu.Bradtke",
  projectId: "5ff99fec-5537-4fe1-80e8-3aa140323a01",
  workspaceId: "544cf8f6-1647-4a7e-beb7-26b41eb9cd7e",
  metadata: {
    totalVersions: 2715.51,
    datapointsCount: 6075.45,
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