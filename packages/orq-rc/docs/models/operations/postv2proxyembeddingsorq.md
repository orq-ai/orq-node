# PostV2ProxyEmbeddingsOrq

## Example Usage

```typescript
import { PostV2ProxyEmbeddingsOrq } from "@orq-ai/node/models/operations";

let value: PostV2ProxyEmbeddingsOrq = {
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
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                             | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The name to display on the trace. If not specified, the default system name will be used.                          |
| `fallbacks`                                                                                                        | [operations.PostV2ProxyEmbeddingsFallbacks](../../models/operations/postv2proxyembeddingsfallbacks.md)[]           | :heavy_minus_sign:                                                                                                 | Array of fallback models to use if primary model fails                                                             |
| `cache`                                                                                                            | [operations.PostV2ProxyEmbeddingsCache](../../models/operations/postv2proxyembeddingscache.md)                     | :heavy_minus_sign:                                                                                                 | Cache configuration for the request.                                                                               |
| `retry`                                                                                                            | [operations.PostV2ProxyEmbeddingsRetry](../../models/operations/postv2proxyembeddingsretry.md)                     | :heavy_minus_sign:                                                                                                 | Retry configuration for the request                                                                                |
| `contact`                                                                                                          | [components.PublicContact](../../models/components/publiccontact.md)                                               | :heavy_minus_sign:                                                                                                 | Information about the contact making the request. If the contact does not exist, it will be created automatically. |