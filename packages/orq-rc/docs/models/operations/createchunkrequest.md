# CreateChunkRequest

## Example Usage

```typescript
import { CreateChunkRequest } from "@orq-ai/node/models/operations";

let value: CreateChunkRequest = {
  knowledgeId: "<id>",
  datasourceId: "<id>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `knowledgeId`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | Unique identifier of the knowledge                                                     |
| `datasourceId`                                                                         | *string*                                                                               | :heavy_check_mark:                                                                     | Unique identifier of the datasource                                                    |
| `requestBody`                                                                          | [operations.CreateChunkRequestBody](../../models/operations/createchunkrequestbody.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |