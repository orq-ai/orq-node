# GetOneKnowledgeRetrievalSettings1

## Example Usage

```typescript
import { GetOneKnowledgeRetrievalSettings1 } from "@orq-ai/node/models/operations";

let value: GetOneKnowledgeRetrievalSettings1 = {
  type: "vector_search",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                             | [operations.GetOneKnowledgeRetrievalSettingsType](../../models/operations/getoneknowledgeretrievalsettingstype.md)                 | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `topK`                                                                                                                             | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Used to filter chunks that are most similar to the query                                                                           |
| `threshold`                                                                                                                        | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Used to filter chunks that are most similar to the query. A value of `0` will be consider disabled.                                |
| `rerankConfig`                                                                                                                     | [operations.GetOneKnowledgeRetrievalSettingsRerankConfig](../../models/operations/getoneknowledgeretrievalsettingsrerankconfig.md) | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |