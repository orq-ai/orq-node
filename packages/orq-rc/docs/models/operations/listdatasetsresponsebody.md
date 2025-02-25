# ListDatasetsResponseBody

Datasets Retrieved Successfully

## Example Usage

```typescript
import { ListDatasetsResponseBody } from "@orq-ai/node/models/operations";

let value: ListDatasetsResponseBody = {
  object: "list",
  data: [
    {
      id: "b5442825-ab06-4ad7-af40-74d34cb8b600",
      displayName: "Arnulfo_Wintheiser15",
      projectId: "f42b14fa-86c2-4fd9-b0be-851ce1c0f984",
      workspaceId: "4dfc8177-3652-4748-b0ed-8df1aff92903",
      metadata: {
        totalVersions: 3304.4,
        datapointsCount: 6383.9,
      },
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `object`                                                                       | [operations.ListDatasetsObject](../../models/operations/listdatasetsobject.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [operations.ListDatasetsData](../../models/operations/listdatasetsdata.md)[]   | :heavy_check_mark:                                                             | N/A                                                                            |
| `hasMore`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |