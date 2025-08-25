# PostV2ProxyEmbeddingsRequestBody

input

## Example Usage

```typescript
import { PostV2ProxyEmbeddingsRequestBody } from "@orq-ai/node/models/operations";

let value: PostV2ProxyEmbeddingsRequestBody = {
  input: "<value>",
  model: "Model X",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `input`                                                                                                          | *operations.PostV2ProxyEmbeddingsInput*                                                                          | :heavy_check_mark:                                                                                               | Input text to embed, encoded as a string or array of tokens.                                                     |
| `model`                                                                                                          | *string*                                                                                                         | :heavy_check_mark:                                                                                               | ID of the model to use                                                                                           |
| `encodingFormat`                                                                                                 | [operations.PostV2ProxyEmbeddingsEncodingFormat](../../models/operations/postv2proxyembeddingsencodingformat.md) | :heavy_minus_sign:                                                                                               | Type of the document element                                                                                     |
| `dimensions`                                                                                                     | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | The number of dimensions the resulting output embeddings should have.                                            |
| `user`                                                                                                           | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | A unique identifier representing your end-user                                                                   |