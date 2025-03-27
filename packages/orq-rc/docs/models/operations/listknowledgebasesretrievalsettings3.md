# ListKnowledgeBasesRetrievalSettings3

## Example Usage

```typescript
import { ListKnowledgeBasesRetrievalSettings3 } from "@orq-ai/node/models/operations";

let value: ListKnowledgeBasesRetrievalSettings3 = {
  type: "hybrid_search",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                     | [operations.ListKnowledgeBasesRetrievalSettingsKnowledgeType](../../models/operations/listknowledgebasesretrievalsettingsknowledgetype.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `topK`                                                                                                                                     | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Used to filter chunks that are most similar to the query                                                                                   |
| `threshold`                                                                                                                                | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Used to filter chunks that are most similar to the query. A value of `0` will be consider disabled.                                        |
| `rerankConfig`                                                                                                                             | [operations.ListKnowledgeBasesRetrievalSettingsRerankConfig](../../models/operations/listknowledgebasesretrievalsettingsrerankconfig.md)   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |