# ListChunksPaginatedRequest

## Example Usage

```typescript
import { ListChunksPaginatedRequest } from "@orq-ai/node/models/operations";

let value: ListChunksPaginatedRequest = {
  knowledgeId: "<id>",
  datasourceId: "<id>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `knowledgeId`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | The unique identifier of the knowledge base                                                            |
| `datasourceId`                                                                                         | *string*                                                                                               | :heavy_check_mark:                                                                                     | The unique identifier of the datasource.                                                               |
| `requestBody`                                                                                          | [operations.ListChunksPaginatedRequestBody](../../models/operations/listchunkspaginatedrequestbody.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |