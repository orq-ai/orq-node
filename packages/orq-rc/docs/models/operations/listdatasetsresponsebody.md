# ListDatasetsResponseBody

Datasets Retrieved Successfully

## Example Usage

```typescript
import { ListDatasetsResponseBody } from "@orq-ai/node/models/operations";

let value: ListDatasetsResponseBody = {
  object: "list",
  data: [
    {
      id: "c39afcd7-2f27-41ff-bb54-42825ab06ad7",
      displayName: "Dina.Kub82",
      projectId: "4cb8b600-810f-4d20-8f42-b14fa86c2fd9",
      workspaceId: "be851ce1-c0f9-484e-84df-c81773652748",
      metadata: {
        totalVersions: 9062.32,
        datapointsCount: 8163.65,
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