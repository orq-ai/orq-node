# UpdateKnowledgeRetrievalSettings2

## Example Usage

```typescript
import { UpdateKnowledgeRetrievalSettings2 } from "@orq-ai/node/models/operations";

let value: UpdateKnowledgeRetrievalSettings2 = {
  type: "keyword_search",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                       | [operations.UpdateKnowledgeRetrievalSettingsKnowledgeType](../../models/operations/updateknowledgeretrievalsettingsknowledgetype.md)         | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `topK`                                                                                                                                       | *number*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | Used to filter chunks that are most similar to the query                                                                                     |
| `threshold`                                                                                                                                  | *number*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | Used to filter chunks that are most similar to the query. A value of `0` will be consider disabled.                                          |
| `rerankConfig`                                                                                                                               | [operations.UpdateKnowledgeRetrievalSettingsRerankConfigInput](../../models/operations/updateknowledgeretrievalsettingsrerankconfiginput.md) | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |