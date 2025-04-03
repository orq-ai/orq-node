# DeleteChunkRequest

## Example Usage

```typescript
import { DeleteChunkRequest } from "@orq-ai/node/models/operations";

let value: DeleteChunkRequest = {
  chunkId: "<id>",
  datasourceId: "<id>",
  knowledgeId: "<id>",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `chunkId`                                   | *string*                                    | :heavy_check_mark:                          | The unique identifier of the chunk          |
| `datasourceId`                              | *string*                                    | :heavy_check_mark:                          | The unique identifier of the data source    |
| `knowledgeId`                               | *string*                                    | :heavy_check_mark:                          | The unique identifier of the knowledge base |