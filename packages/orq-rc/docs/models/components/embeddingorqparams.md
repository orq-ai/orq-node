# EmbeddingOrqParams

## Example Usage

```typescript
import { EmbeddingOrqParams } from "@orq-ai/node/models/components";

let value: EmbeddingOrqParams = {
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
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `cache`                                                                                                              | [components.EmbeddingCacheConfig](../../models/components/embeddingcacheconfig.md)                                   | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `contact`                                                                                                            | [components.EmbeddingContactParams](../../models/components/embeddingcontactparams.md)                               | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `fallbacks`                                                                                                          | [components.FallbackConfig](../../models/components/fallbackconfig.md)[]                                             | :heavy_minus_sign:                                                                                                   | Deprecated: use top-level fallbacks instead.                                                                         |
| `identity`                                                                                                           | [components.PublicIdentity](../../models/components/publicidentity.md)                                               | :heavy_minus_sign:                                                                                                   | Information about the identity making the request. If the identity does not exist, it will be created automatically. |
| `loadBalancer`                                                                                                       | [components.EmbeddingLoadBalancerConfig](../../models/components/embeddingloadbalancerconfig.md)                     | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `name`                                                                                                               | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | Deprecated: use top-level name instead.                                                                              |
| `retry`                                                                                                              | [components.EmbeddingRetryConfig](../../models/components/embeddingretryconfig.md)                                   | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `timeout`                                                                                                            | [components.EmbeddingTimeoutConfig](../../models/components/embeddingtimeoutconfig.md)                               | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |