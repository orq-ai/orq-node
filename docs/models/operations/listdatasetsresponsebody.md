# ListDatasetsResponseBody

Datasets Retrieved Successfully

## Example Usage

```typescript
import { ListDatasetsResponseBody } from "@orq-ai/node/models/operations";

let value: ListDatasetsResponseBody = {
  object: "list",
  data: [
    {
      id: "635baedd-e456-48a4-8064-feda58d1c0dc",
      displayName: "Liza.Dach",
      projectId: "fff1f37c-3921-4150-b6a6-1142f2c998f5",
      workspaceId: "86f916cb-e4c7-49ff-ad5e-a60c8cbc4c87",
      metadata: {
        totalVersions: 213.58,
        datapointsCount: 1023.16,
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