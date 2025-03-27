# CreateChunkResponseBody

## Example Usage

```typescript
import { CreateChunkResponseBody } from "@orq-ai/node/models/operations";

let value: CreateChunkResponseBody = {
  knowledgeId: "<id>",
  workspaceId: "<id>",
  dataSourceId: "<id>",
  text: "<value>",
  processingAttempts: [
    {
      id: "<id>",
      startedAt: "<value>",
    },
  ],
  created: "<value>",
  updated: "<value>",
  createdById: "<id>",
  updatedById: "<id>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `knowledgeId`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The id of the resource                                                                             |
| `workspaceId`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The id of the resource                                                                             |
| `dataSourceId`                                                                                     | *string*                                                                                           | :heavy_check_mark:                                                                                 | The id of the resource                                                                             |
| `id`                                                                                               | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Unique identifier for the element                                                                  |
| `text`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | Text content of the element                                                                        |
| `enabled`                                                                                          | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `metadata`                                                                                         | [operations.CreateChunkKnowledgeMetadata](../../models/operations/createchunkknowledgemetadata.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `processingAttempts`                                                                               | [operations.ProcessingAttempts](../../models/operations/processingattempts.md)[]                   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `created`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | The date and time the chunk was created                                                            |
| `updated`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | The date and time the chunk was updated                                                            |
| `createdById`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The unique identifier of the user who created the chunk                                            |
| `updatedById`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The unique identifier of the user who updated the chunk                                            |