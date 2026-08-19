# CreateChunkRequest

## Example Usage

```typescript
import { CreateChunkRequest } from "@orq-ai/node/models/operations";

let value: CreateChunkRequest = {
  knowledgeId: "<id>",
  datasourceId: "<id>",
  requestBody: [],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `knowledgeId`                                                      | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `datasourceId`                                                     | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `requestBody`                                                      | [components.UpsertChunk](../../models/components/upsertchunk.md)[] | :heavy_check_mark:                                                 | N/A                                                                |