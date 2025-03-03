# UpdateDatasetResponseBody

Dataset updated.

## Example Usage

```typescript
import { UpdateDatasetResponseBody } from "@orq-ai/node/models/operations";

let value: UpdateDatasetResponseBody = {
  id: "48bfbc25-6a44-45c9-a115-cbbc488bf4ca",
  displayName: "Opal.Bashirian75",
  projectId: "834b0d78-8a51-4528-85ff-99fec5537fe1",
  workspaceId: "e83aa140-323a-4012-b544-cf8f61647a7e",
  metadata: {
    totalVersions: 7019.78,
    datapointsCount: 4896.85,
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