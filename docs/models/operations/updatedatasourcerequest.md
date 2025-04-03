# UpdateDatasourceRequest

## Example Usage

```typescript
import { UpdateDatasourceRequest } from "@orq-ai/node/models/operations";

let value: UpdateDatasourceRequest = {
  knowledgeId: "<id>",
  datasourceId: "<id>",
  requestBody: {
    displayName: "Andreanne_Murazik",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `knowledgeId`                                                                                    | *string*                                                                                         | :heavy_check_mark:                                                                               | The unique identifier of the knowledge base                                                      |
| `datasourceId`                                                                                   | *string*                                                                                         | :heavy_check_mark:                                                                               | The unique identifier of the datasource.                                                         |
| `requestBody`                                                                                    | [operations.UpdateDatasourceRequestBody](../../models/operations/updatedatasourcerequestbody.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |