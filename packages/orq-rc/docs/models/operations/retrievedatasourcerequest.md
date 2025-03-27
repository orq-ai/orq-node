# RetrieveDatasourceRequest

## Example Usage

```typescript
import { RetrieveDatasourceRequest } from "@orq-ai/node/models/operations";

let value: RetrieveDatasourceRequest = {
  knowledgeId: "<id>",
  datasourceId: "<id>",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `knowledgeId`                               | *string*                                    | :heavy_check_mark:                          | The unique identifier of the knowledge base |
| `datasourceId`                              | *string*                                    | :heavy_check_mark:                          | The unique identifier of the datasource.    |