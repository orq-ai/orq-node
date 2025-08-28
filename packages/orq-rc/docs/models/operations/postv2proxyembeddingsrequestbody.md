# PostV2ProxyEmbeddingsRequestBody

input

## Example Usage

```typescript
import { PostV2ProxyEmbeddingsRequestBody } from "@orq-ai/node/models/operations";

let value: PostV2ProxyEmbeddingsRequestBody = {
  input: "<value>",
  model: "Model X",
  orq: {
    fallbacks: [
      {
        model: "openai/gpt-4o-mini",
      },
    ],
    cache: {
      ttl: 3600,
      type: "exact_match",
    },
    retry: {
      onCodes: [
        429,
        500,
        502,
        503,
        504,
      ],
    },
    contact: {
      id: "contact_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      displayName: "Jane Doe",
      email: "jane.doe@example.com",
      metadata: [
        {
          "department": "Engineering",
          "role": "Senior Developer",
        },
      ],
      logoUrl: "https://example.com/avatars/jane-doe.jpg",
      tags: [
        "hr",
        "engineering",
      ],
    },
  },
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
| `orq`                                                                                                            | [operations.PostV2ProxyEmbeddingsOrq](../../models/operations/postv2proxyembeddingsorq.md)                       | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |