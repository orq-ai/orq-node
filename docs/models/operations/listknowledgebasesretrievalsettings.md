# ListKnowledgeBasesRetrievalSettings

The retrieval settings for the knowledge base. If not provider, Hybrid Search will be used as a default query strategy.

## Example Usage

```typescript
import { ListKnowledgeBasesRetrievalSettings } from "@orq-ai/node/models/operations";

let value: ListKnowledgeBasesRetrievalSettings = {};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `retrievalType`                                                                                                                          | [operations.ListKnowledgeBasesRetrievalType](../../models/operations/listknowledgebasesretrievaltype.md)                                 | :heavy_minus_sign:                                                                                                                       | The retrieval type to use for the knowledge base. If not provided, Hybrid Search will be used as a default query strategy.               |
| `topK`                                                                                                                                   | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The number of results to return from the search.                                                                                         |
| `threshold`                                                                                                                              | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The threshold value used to filter the search results, only documents with a relevance score greater than the threshold will be returned |
| `rerankConfig`                                                                                                                           | [operations.ListKnowledgeBasesRerankConfig](../../models/operations/listknowledgebasesrerankconfig.md)                                   | :heavy_minus_sign:                                                                                                                       | The rerank configuration for the knowledge base. In case the model is provided it will be used to enhance the search precision.          |