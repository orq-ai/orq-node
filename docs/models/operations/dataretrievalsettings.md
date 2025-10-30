# DataRetrievalSettings

The retrieval settings for the knowledge base.

## Example Usage

```typescript
import { DataRetrievalSettings } from "@orq-ai/node/models/operations";

let value: DataRetrievalSettings = {};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `topK`                                                                                                                                   | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The number of results to return from the search.                                                                                         |
| `threshold`                                                                                                                              | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The threshold value used to filter the search results, only documents with a relevance score greater than the threshold will be returned |
| `rerankConfig`                                                                                                                           | [operations.DataRerankConfig](../../models/operations/datarerankconfig.md)                                                               | :heavy_minus_sign:                                                                                                                       | The rerank configuration for the knowledge base. In case the model is provided it will be used to enhance the search precision.          |
| `agenticRagConfig`                                                                                                                       | [operations.DataAgenticRagConfig](../../models/operations/dataagenticragconfig.md)                                                       | :heavy_minus_sign:                                                                                                                       | The Agentic RAG configuration for the knowledge base. If `null` is provided, Agentic RAG will be disabled.                               |