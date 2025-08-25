# PostV2ProxyEmbeddingsData

## Example Usage

```typescript
import { PostV2ProxyEmbeddingsData } from "@orq-ai/node/models/operations";

let value: PostV2ProxyEmbeddingsData = {
  object: "embedding",
  embedding: "<value>",
  index: 6190.89,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                   | [operations.PostV2ProxyEmbeddingsProxyObject](../../models/operations/postv2proxyembeddingsproxyobject.md) | :heavy_check_mark:                                                                                         | The object type, which is always `embedding`.                                                              |
| `embedding`                                                                                                | *operations.Embedding*                                                                                     | :heavy_check_mark:                                                                                         | The embedding vector, which is a list of floats. The length of vector depends on the model.                |
| `index`                                                                                                    | *number*                                                                                                   | :heavy_check_mark:                                                                                         | The index of the embedding in the list of embeddings.                                                      |