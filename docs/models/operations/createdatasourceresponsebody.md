# CreateDatasourceResponseBody

Datasource successfully created

## Example Usage

```typescript
import { CreateDatasourceResponseBody } from "@orq-ai/node/models/operations";

let value: CreateDatasourceResponseBody = {
  displayName: "Lilian19",
  status: "failed",
  created: "<value>",
  updated: "<value>",
  knowledgeId: "<id>",
  chunksCount: 3148.35,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_minus_sign:                                                                     | The unique identifier of the data source                                               |
| `displayName`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | The display name of the datasource. Normally the name of the uploaded file             |
| `description`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | The description of the knowledge base                                                  |
| `status`                                                                               | [operations.CreateDatasourceStatus](../../models/operations/createdatasourcestatus.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `fileId`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | The unique identifier of the file used to create the datasource.                       |
| `created`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | The date and time the datasource was created                                           |
| `updated`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | The date and time the datasource was updated                                           |
| `createdById`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | The user ID of the creator of the knowledge base                                       |
| `updateById`                                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | The user ID of the last user who updated the knowledge base                            |
| `knowledgeId`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | The unique identifier of the knowledge base                                            |
| `chunksCount`                                                                          | *number*                                                                               | :heavy_check_mark:                                                                     | The number of chunks in the datasource                                                 |