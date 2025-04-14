# ListDatasourcesResponseBody

Datasources successfully retrieved

## Example Usage

```typescript
import { ListDatasourcesResponseBody } from "@orq-ai/node/models/operations";

let value: ListDatasourcesResponseBody = {
  object: "list",
  data: [
    {
      displayName: "Vance8",
      status: "completed",
      created: "<value>",
      updated: "<value>",
      knowledgeId: "<id>",
      chunksCount: 1275.97,
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `object`                                                                             | [operations.ListDatasourcesObject](../../models/operations/listdatasourcesobject.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | [operations.ListDatasourcesData](../../models/operations/listdatasourcesdata.md)[]   | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `hasMore`                                                                            | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |