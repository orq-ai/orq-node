# RetrievalConfig2

## Example Usage

```typescript
import { RetrievalConfig2 } from "@orq-ai/node/models/operations";

let value: RetrievalConfig2 = {
  type: "keyword_search",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [operations.SearchKnowledgeRetrievalConfigType](../../models/operations/searchknowledgeretrievalconfigtype.md)                 | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `topK`                                                                                                                         | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Used to filter chunks that are most similar to the query                                                                       |
| `threshold`                                                                                                                    | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Used to filter chunks that are most similar to the query. A value of `0` will be consider disabled.                            |
| `rerankConfig`                                                                                                                 | [operations.SearchKnowledgeRetrievalConfigRerankConfig](../../models/operations/searchknowledgeretrievalconfigrerankconfig.md) | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |