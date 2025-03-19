# UpdateDatasetResponseBody

Dataset updated.

## Example Usage

```typescript
import { UpdateDatasetResponseBody } from "@orq-ai/node/models/operations";

let value: UpdateDatasetResponseBody = {
  id: "e10e83aa-1403-423a-a012-544cf8f61647",
  displayName: "Jairo_Torp48",
  projectId: "6b41eb9c-d7ee-4498-98f4-fe7dca53ad0a",
  workspaceId: "e5782bd0-40fa-4f8c-9556-a5ef031037d3",
  metadata: {
    totalVersions: 9296.19,
    datapointsCount: 6672.15,
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