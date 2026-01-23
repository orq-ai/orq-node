# CreateRerankRequestBody

input

## Example Usage

```typescript
import { CreateRerankRequestBody } from "@orq-ai/node/models/operations";

let value: CreateRerankRequestBody = {
  query: "<value>",
  documents: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  model: "CTS",
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

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `query`                                                                                                                                                   | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | The search query                                                                                                                                          |
| `documents`                                                                                                                                               | *string*[]                                                                                                                                                | :heavy_check_mark:                                                                                                                                        | A list of texts that will be compared to the `query`. For optimal performance we recommend against sending more than 1,000 documents in a single request. |
| `model`                                                                                                                                                   | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | The identifier of the model to use                                                                                                                        |
| `topN`                                                                                                                                                    | *number*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | The number of most relevant documents or indices to return, defaults to the length of the documents                                                       |
| `filename`                                                                                                                                                | *string*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | The filename of the document to rerank                                                                                                                    |
| `orq`                                                                                                                                                     | [operations.CreateRerankOrq](../../models/operations/creatererankorq.md)                                                                                  | :heavy_minus_sign:                                                                                                                                        | N/A                                                                                                                                                       |