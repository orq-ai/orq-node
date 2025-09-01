# PostV2ProxyRerankRequestBody

input

## Example Usage

```typescript
import { PostV2ProxyRerankRequestBody } from "@orq-ai/node/models/operations";

let value: PostV2ProxyRerankRequestBody = {
  query: "<value>",
  documents: [],
  model: "Taurus",
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

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `query`                                                                                             | *string*                                                                                            | :heavy_check_mark:                                                                                  | The search query                                                                                    |
| `documents`                                                                                         | *operations.PostV2ProxyRerankDocuments*[]                                                           | :heavy_check_mark:                                                                                  | A list of document objects or strings to rerank.                                                    |
| `model`                                                                                             | *string*                                                                                            | :heavy_check_mark:                                                                                  | The identifier of the model to use                                                                  |
| `topN`                                                                                              | *number*                                                                                            | :heavy_minus_sign:                                                                                  | The number of most relevant documents or indices to return, defaults to the length of the documents |
| `filename`                                                                                          | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The filename of the document to rerank                                                              |
| `orq`                                                                                               | [operations.PostV2ProxyRerankOrq](../../models/operations/postv2proxyrerankorq.md)                  | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |