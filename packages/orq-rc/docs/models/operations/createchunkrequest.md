# CreateChunkRequest

## Example Usage

```typescript
import { CreateChunkRequest } from "@orq-ai/node/models/operations";

let value: CreateChunkRequest = {
  knowledgeId: "<id>",
  datasourceId: "<id>",
  requestBody: [
    {
      text: "<value>",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `knowledgeId`                                                      | *string*                                                           | :heavy_check_mark:                                                 | Unique identifier of the knowledge                                 |
| `datasourceId`                                                     | *string*                                                           | :heavy_check_mark:                                                 | Unique identifier of the datasource                                |
| `requestBody`                                                      | [operations.RequestBody](../../models/operations/requestbody.md)[] | :heavy_check_mark:                                                 | N/A                                                                |