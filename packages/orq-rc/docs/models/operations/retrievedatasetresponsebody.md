# RetrieveDatasetResponseBody

Dataset retrieved successfully. Returns the complete dataset object.

## Example Usage

```typescript
import { RetrieveDatasetResponseBody } from "@orq-ai/node/models/operations";

let value: RetrieveDatasetResponseBody = {
  id: "bf4ca9cf-02c1-4834-ab0d-788a515285ff",
  displayName: "Lia.Torphy-Runolfsdottir36",
  projectId: "7fe10e83-aa14-4032-93a0-12544cf8f616",
  workspaceId: "7a7eeb72-6b41-4eb9-bcd7-ee4988f4fe7d",
  metadata: {
    totalVersions: 6778.95,
    datapointsCount: 3198.34,
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