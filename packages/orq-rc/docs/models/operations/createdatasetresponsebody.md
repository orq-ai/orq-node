# CreateDatasetResponseBody

Dataset created successfully. Returns the newly created dataset object.

## Example Usage

```typescript
import { CreateDatasetResponseBody } from "@orq-ai/node/models/operations";

let value: CreateDatasetResponseBody = {
  id: "e4568a40-64fe-4da5-b8d1-c0dc0a822c9f",
  displayName: "Zachery45",
  projectId: "39211506-a611-442f-a2c9-98f5c86f916c",
  workspaceId: "e4c79ffd-5ea6-40c8-9cbc-4c87a014f250",
  metadata: {
    totalVersions: 3203.26,
    datapointsCount: 9468.08,
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
| `metadata`                                                                                    | [operations.CreateDatasetMetadata](../../models/operations/createdatasetmetadata.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the resource was created                                                    |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the resource was last updated                                               |