# CreateEmbeddingRequestBody

input

## Example Usage

```typescript
import { CreateEmbeddingRequestBody } from "@orq-ai/node/models/operations";

let value: CreateEmbeddingRequestBody = {
  input: [
    "<value 1>",
    "<value 2>",
  ],
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
    identity: {
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
    loadBalancer: {
      type: "weight_based",
      models: [
        {
          model: "openai/gpt-4o",
          weight: 0.7,
        },
        {
          model: "anthropic/claude-3-5-sonnet",
          weight: 0.3,
        },
      ],
    },
    timeout: {
      callTimeout: 30000,
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `input`                                                                        | *operations.CreateEmbeddingInput*                                              | :heavy_check_mark:                                                             | Input text to embed, encoded as a string or array of tokens.                   |
| `model`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | ID of the model to use                                                         |
| `encodingFormat`                                                               | [operations.EncodingFormat](../../models/operations/encodingformat.md)         | :heavy_minus_sign:                                                             | Type of the document element                                                   |
| `dimensions`                                                                   | *number*                                                                       | :heavy_minus_sign:                                                             | The number of dimensions the resulting output embeddings should have.          |
| `user`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | A unique identifier representing your end-user                                 |
| `orq`                                                                          | [operations.CreateEmbeddingOrq](../../models/operations/createembeddingorq.md) | :heavy_minus_sign:                                                             | N/A                                                                            |