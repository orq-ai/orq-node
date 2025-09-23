# SearchKnowledgeRerankConfig

Override the rerank configuration for this search. If not provided, will use the knowledge base configured rerank settings.

## Example Usage

```typescript
import { SearchKnowledgeRerankConfig } from "@orq-ai/node/models/operations";

let value: SearchKnowledgeRerankConfig = {
  model: "cohere/rerank-multilingual-v3.0",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              | Example                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `model`                                                                                                                                  | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The name of the rerank model to use. Refer to the [model list](https://docs.orq.ai/docs/proxy#/rerank-models).                           | cohere/rerank-multilingual-v3.0                                                                                                          |
| `threshold`                                                                                                                              | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The threshold value used to filter the rerank results, only documents with a relevance score greater than the threshold will be returned |                                                                                                                                          |
| `topK`                                                                                                                                   | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The number of top results to return after reranking. If not provided, will default to the knowledge base configured `top_k`.             |                                                                                                                                          |