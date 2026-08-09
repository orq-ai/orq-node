# CreateDatasetResponseBody

Dataset created successfully. Returns the newly created dataset object.

## Example Usage

```typescript
import { CreateDatasetResponseBody } from "@orq-ai/node/models/operations";

let value: CreateDatasetResponseBody = {
  id: "<id>",
  displayName: "Jacey.Mitchell33",
  projectId: "<id>",
  workspaceId: "<id>",
  metadata: {
    totalVersions: 4600.91,
    datapointsCount: 2728.48,
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
| `metadata`                                                                                    | [operations.CreateDatasetMetadata](../../models/operations/createdatasetmetadata.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdById`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The unique identifier of the user who created the dataset                                     |
| `updatedById`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The unique identifier of the user who last updated the dataset                                |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the resource was created                                                    |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the resource was last updated                                               |