# DeleteChunksRequest

## Example Usage

```typescript
import { DeleteChunksRequest } from "@orq-ai/node/models/operations";

let value: DeleteChunksRequest = {
  knowledgeId: "<id>",
  datasourceId: "<id>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `knowledgeId`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | The unique identifier of the knowledge base                                              |
| `datasourceId`                                                                           | *string*                                                                                 | :heavy_check_mark:                                                                       | The unique identifier of the datasource.                                                 |
| `requestBody`                                                                            | [operations.DeleteChunksRequestBody](../../models/operations/deletechunksrequestbody.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |