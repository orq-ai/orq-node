# Datasource

## Example Usage

```typescript
import { Datasource } from "@orq-ai/node/models/components";

let value: Datasource = {
  displayName: "Blair_Cummings",
  status: "failed",
  created: "<value>",
  updated: "<value>",
  knowledgeId: "<id>",
  chunksCount: 1408.84,
  id: "<id>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `displayName`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `description`                                                                         | *string*                                                                              | :heavy_minus_sign:                                                                    | The description of the knowledge base                                                 |
| `status`                                                                              | [components.DatasourceStatus](../../models/components/datasourcestatus.md)            | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `fileId`                                                                              | *string*                                                                              | :heavy_minus_sign:                                                                    | The unique identifier of the file used to create the datasource.                      |
| `created`                                                                             | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `updated`                                                                             | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `createdById`                                                                         | *string*                                                                              | :heavy_minus_sign:                                                                    | The user ID of the creator of the knowledge base                                      |
| `updateById`                                                                          | *string*                                                                              | :heavy_minus_sign:                                                                    | The user ID of the last user who updated the knowledge base                           |
| `knowledgeId`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `chunksCount`                                                                         | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `processingAttempts`                                                                  | [components.ProcessingAttempt](../../models/components/processingattempt.md)[]        | :heavy_minus_sign:                                                                    | Additive compatibility fields formerly available only from database-shaped responses. |
| `metadata`                                                                            | [components.CountMetadata](../../models/components/countmetadata.md)                  | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `attachment`                                                                          | [components.DatasourceAttachment](../../models/components/datasourceattachment.md)    | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `id`                                                                                  | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |