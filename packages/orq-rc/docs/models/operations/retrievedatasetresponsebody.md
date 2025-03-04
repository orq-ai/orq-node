# RetrieveDatasetResponseBody

Dataset retrieved successfully. Returns the complete dataset object.

## Example Usage

```typescript
import { RetrieveDatasetResponseBody } from "@orq-ai/node/models/operations";

let value: RetrieveDatasetResponseBody = {
  id: "0c8cbc4c-87a0-414f-9250-55fd60da2f1d",
  displayName: "Hoyt_Pagac62",
  projectId: "ecb062db-efcf-4900-85dd-f10e48f6a6c8",
  workspaceId: "448bfbc2-56a4-445c-a911-5cbbc488bf4c",
  metadata: {
    totalVersions: 5802.38,
    datapointsCount: 7748.8,
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
| `metadata`                                                                                    | [operations.RetrieveDatasetMetadata](../../models/operations/retrievedatasetmetadata.md)      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the resource was created                                                    |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the resource was last updated                                               |