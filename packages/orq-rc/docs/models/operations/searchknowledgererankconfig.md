# SearchKnowledgeRerankConfig

Override the rerank configuration for this search. If not provided, will use the knowledge base configured rerank settings.

## Example Usage

```typescript
import { SearchKnowledgeRerankConfig } from "@orq-ai/node/models/operations";

let value: SearchKnowledgeRerankConfig = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `enabled`                                                                                              | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `provider`                                                                                             | [operations.SearchKnowledgeProvider](../../models/operations/searchknowledgeprovider.md)               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `topK`                                                                                                 | *number*                                                                                               | :heavy_minus_sign:                                                                                     | The number of results to return by the reranking model                                                 |
| `model`                                                                                                | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The name of the model to use                                                                           |
| `modelDbId`                                                                                            | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The ID of the model in the database                                                                    |
| `modelType`                                                                                            | [operations.SearchKnowledgeModelType](../../models/operations/searchknowledgemodeltype.md)             | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `modelParameters`                                                                                      | [operations.SearchKnowledgeModelParameters](../../models/operations/searchknowledgemodelparameters.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |