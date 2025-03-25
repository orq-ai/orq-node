# CreateDatasetResponseBody

Dataset created successfully. Returns the newly created dataset object.

## Example Usage

```typescript
import { CreateDatasetResponseBody } from "@orq-ai/node/models/operations";

let value: CreateDatasetResponseBody = {
  id: "79ffd5ea-60c8-4cbc-b4c8-7a014f25055f",
  displayName: "Geovany15",
  projectId: "1d46caf9-1ecb-4062-bdbe-fcf9005ddf10",
  workspaceId: "48f6a6c8-3448-4bfb-ac25-6a445c9115cb",
  metadata: {
    totalVersions: 7672.1,
    datapointsCount: 2871.53,
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