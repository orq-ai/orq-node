# CreateEmbeddingRequestBody

## Example Usage

```typescript
import { CreateEmbeddingRequestBody } from "@orq-ai/node/models/operations";

let value: CreateEmbeddingRequestBody = {
  input: [
    [],
  ],
  model: "Expedition",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `cache`                                                                                          | [components.EmbeddingCacheConfig](../../models/components/embeddingcacheconfig.md)               | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `dimensions`                                                                                     | *number*                                                                                         | :heavy_minus_sign:                                                                               | The number of dimensions the resulting output embeddings should have.                            |
| `encodingFormat`                                                                                 | [operations.EncodingFormat](../../models/operations/encodingformat.md)                           | :heavy_minus_sign:                                                                               | The format to return the embeddings in. Can be either float or base64.                           |
| `fallbacks`                                                                                      | [components.FallbackConfig](../../models/components/fallbackconfig.md)[]                         | :heavy_minus_sign:                                                                               | Array of fallback models to use if primary model fails.                                          |
| `input`                                                                                          | *operations.CreateEmbeddingInput*                                                                | :heavy_check_mark:                                                                               | Input text to embed, encoded as a string or array of tokens.                                     |
| `loadBalancer`                                                                                   | [components.EmbeddingLoadBalancerConfig](../../models/components/embeddingloadbalancerconfig.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `model`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | ID of the model to use.                                                                          |
| `name`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | The name to display on the trace. If not specified, the default system name will be used.        |
| `orq`                                                                                            | [components.EmbeddingOrqParams](../../models/components/embeddingorqparams.md)                   | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `retry`                                                                                          | [components.EmbeddingRetryConfig](../../models/components/embeddingretryconfig.md)               | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `timeout`                                                                                        | [components.EmbeddingTimeoutConfig](../../models/components/embeddingtimeoutconfig.md)           | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `user`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | A unique identifier representing your end-user.                                                  |