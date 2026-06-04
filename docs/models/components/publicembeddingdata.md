# PublicEmbeddingData

## Example Usage

```typescript
import { PublicEmbeddingData } from "@orq-ai/node/models/components";

let value: PublicEmbeddingData = {
  embedding: "<value>",
  index: 370611,
  object: "embedding",
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `embedding`                                                                                                                                                     | *any*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                              | The embedding vector, which is a list of floats. The length of vector depends on the model. Can also be a base64-encoded string when encoding_format is base64. |
| `index`                                                                                                                                                         | *number*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | The index of the embedding in the list of embeddings.                                                                                                           |
| `object`                                                                                                                                                        | [components.ObjectT](../../models/components/objectt.md)                                                                                                        | :heavy_check_mark:                                                                                                                                              | The object type, which is always "embedding".                                                                                                                   |