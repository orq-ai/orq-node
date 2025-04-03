# ListDatasetsResponseBody

Datasets Retrieved Successfully

## Example Usage

```typescript
import { ListDatasetsResponseBody } from "@orq-ai/node/models/operations";

let value: ListDatasetsResponseBody = {
  object: "list",
  data: [
    {
      id: "4cf5d1ac-26e1-4096-9ce4-679fb64f2bea",
      displayName: "Cloyd92",
      projectId: "de4568a4-064f-4eda-b58d-1c0dc0a822c9",
      workspaceId: "ff1f37c3-9211-4506-aa61-142f2c998f5c",
      metadata: {
        totalVersions: 3956.34,
        datapointsCount: 9554.66,
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