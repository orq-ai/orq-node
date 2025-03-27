# UpdateChunkRequest

## Example Usage

```typescript
import { UpdateChunkRequest } from "@orq-ai/node/models/operations";

let value: UpdateChunkRequest = {
  chunkId: "<id>",
  datasourceId: "<id>",
  knowledgeId: "<id>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `chunkId`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | The unique identifier of the chunk                                                     |
| `datasourceId`                                                                         | *string*                                                                               | :heavy_check_mark:                                                                     | The unique identifier of the data source                                               |
| `knowledgeId`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | The unique identifier of the knowledge base                                            |
| `requestBody`                                                                          | [operations.UpdateChunkRequestBody](../../models/operations/updatechunkrequestbody.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |