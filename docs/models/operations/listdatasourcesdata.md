# ListDatasourcesData

## Example Usage

```typescript
import { ListDatasourcesData } from "@orq-ai/node/models/operations";

let value: ListDatasourcesData = {
  displayName: "Nolan_Feil",
  status: "pending",
  created: "<value>",
  updated: "<value>",
  knowledgeId: "<id>",
  chunksCount: 5265.2,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_minus_sign:                                                                   | The id of the resource                                                               |
| `displayName`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The display name of the datasource. Normally the name of the uploaded file           |
| `description`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | The description of the knowledge base                                                |
| `status`                                                                             | [operations.ListDatasourcesStatus](../../models/operations/listdatasourcesstatus.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `fileId`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | The unique identifier of the file used to create the datasource.                     |
| `created`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | The date and time the datasource was created                                         |
| `updated`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | The date and time the datasource was updated                                         |
| `createdById`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | The id of the resource                                                               |
| `updateById`                                                                         | *string*                                                                             | :heavy_minus_sign:                                                                   | The id of the resource                                                               |
| `knowledgeId`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The unique identifier of the knowledge base                                          |
| `chunksCount`                                                                        | *number*                                                                             | :heavy_check_mark:                                                                   | The number of chunks in the datasource                                               |