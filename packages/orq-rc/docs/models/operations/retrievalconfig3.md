# RetrievalConfig3

## Example Usage

```typescript
import { RetrievalConfig3 } from "@orq-ai/node/models/operations";

let value: RetrievalConfig3 = {
  type: "hybrid_search",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                   | [operations.SearchKnowledgeRetrievalConfigKnowledgeType](../../models/operations/searchknowledgeretrievalconfigknowledgetype.md)         | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `topK`                                                                                                                                   | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | Used to filter chunks that are most similar to the query                                                                                 |
| `threshold`                                                                                                                              | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | Used to filter chunks that are most similar to the query. A value of `0` will be consider disabled.                                      |
| `rerankConfig`                                                                                                                           | [operations.SearchKnowledgeRetrievalConfigRerankConfigInput](../../models/operations/searchknowledgeretrievalconfigrerankconfiginput.md) | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |