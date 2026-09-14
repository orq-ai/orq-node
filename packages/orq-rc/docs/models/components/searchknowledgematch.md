# SearchKnowledgeMatch

## Example Usage

```typescript
import { SearchKnowledgeMatch } from "@orq-ai/node/models/components";

let value: SearchKnowledgeMatch = {
  id: "<id>",
  text: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `text`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `vector`                                                                                           | *number*[]                                                                                         | :heavy_minus_sign:                                                                                 | Embedding vector of the chunk, returned only when requested.                                       |
| `metadata`                                                                                         | [components.SearchKnowledgeMatchMetadata](../../models/components/searchknowledgematchmetadata.md) | :heavy_minus_sign:                                                                                 | Arbitrary chunk metadata, omitted unless requested.                                                |
| `scores`                                                                                           | [components.SearchKnowledgeScores](../../models/components/searchknowledgescores.md)               | :heavy_minus_sign:                                                                                 | Search and rerank scores, omitted unless requested.                                                |