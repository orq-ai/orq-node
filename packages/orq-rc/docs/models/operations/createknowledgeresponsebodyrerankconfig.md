# CreateKnowledgeResponseBodyRerankConfig

The rerank configuration for the knowledge base. In case the model is provided it will be used to enhance the search precision.

## Example Usage

```typescript
import { CreateKnowledgeResponseBodyRerankConfig } from "@orq-ai/node/models/operations";

let value: CreateKnowledgeResponseBodyRerankConfig = {
  rerankModel: "<value>",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `topK`                                                                                                                                   | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The number of results to return by the reranking model                                                                                   |
| `rerankThreshold`                                                                                                                        | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The threshold value used to filter the rerank results, only documents with a relevance score greater than the threshold will be returned |
| `rerankModel`                                                                                                                            | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The rerank model to use for the knowledge base.                                                                                          |