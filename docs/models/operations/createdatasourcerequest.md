# CreateDatasourceRequest

## Example Usage

```typescript
import { CreateDatasourceRequest } from "@orq-ai/node/models/operations";

let value: CreateDatasourceRequest = {
  knowledgeId: "<id>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `knowledgeId`                                                                                    | *string*                                                                                         | :heavy_check_mark:                                                                               | The unique identifier of the knowledge base                                                      |
| `requestBody`                                                                                    | [operations.CreateDatasourceRequestBody](../../models/operations/createdatasourcerequestbody.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |