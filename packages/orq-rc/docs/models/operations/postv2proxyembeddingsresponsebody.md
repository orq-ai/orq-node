# PostV2ProxyEmbeddingsResponseBody

Returns the embedding vector.

## Example Usage

```typescript
import { PostV2ProxyEmbeddingsResponseBody } from "@orq-ai/node/models/operations";

let value: PostV2ProxyEmbeddingsResponseBody = {
  object: "list",
  data: [
    {
      object: "embedding",
      embedding: "<value>",
      index: 5268.8,
    },
  ],
  model: "Model S",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `object`                                                                                         | [operations.PostV2ProxyEmbeddingsObject](../../models/operations/postv2proxyembeddingsobject.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `data`                                                                                           | [operations.PostV2ProxyEmbeddingsData](../../models/operations/postv2proxyembeddingsdata.md)[]   | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `model`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | ID of the model to used.                                                                         |
| `usage`                                                                                          | [operations.PostV2ProxyEmbeddingsUsage](../../models/operations/postv2proxyembeddingsusage.md)   | :heavy_minus_sign:                                                                               | N/A                                                                                              |