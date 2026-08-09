# ListDatasetsResponseBody

Datasets Retrieved Successfully

## Example Usage

```typescript
import { ListDatasetsResponseBody } from "@orq-ai/node/models/operations";

let value: ListDatasetsResponseBody = {
  object: "list",
  data: [
    {
      id: "<id>",
      displayName: "Reggie.Rosenbaum",
      projectId: "<id>",
      workspaceId: "<id>",
      metadata: {
        totalVersions: 1632.71,
        datapointsCount: 2574.75,
      },
    },
  ],
  hasMore: true,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `object`                                                                       | [operations.ListDatasetsObject](../../models/operations/listdatasetsobject.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [operations.ListDatasetsData](../../models/operations/listdatasetsdata.md)[]   | :heavy_check_mark:                                                             | N/A                                                                            |
| `hasMore`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |