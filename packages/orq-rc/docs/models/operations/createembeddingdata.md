# CreateEmbeddingData

## Example Usage

```typescript
import { CreateEmbeddingData } from "@orq-ai/node/models/operations";

let value: CreateEmbeddingData = {
  object: "embedding",
  embedding: [
    5273.01,
    3062.84,
  ],
  index: 288.06,
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                             | [operations.CreateEmbeddingRouterEmbeddingsObject](../../models/operations/createembeddingrouterembeddingsobject.md) | :heavy_check_mark:                                                                                                   | The object type, which is always `embedding`.                                                                        |
| `embedding`                                                                                                          | *operations.Embedding*                                                                                               | :heavy_check_mark:                                                                                                   | The embedding vector, which is a list of floats. The length of vector depends on the model.                          |
| `index`                                                                                                              | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | The index of the embedding in the list of embeddings.                                                                |