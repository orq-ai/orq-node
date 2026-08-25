# EmbeddingOrqParams

## Example Usage

```typescript
import { EmbeddingOrqParams } from "@orq-ai/node/models/components";

let value: EmbeddingOrqParams = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `cache`                                                                                          | [components.EmbeddingCacheConfig](../../models/components/embeddingcacheconfig.md)               | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `contact`                                                                                        | [components.EmbeddingContactParams](../../models/components/embeddingcontactparams.md)           | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `fallbacks`                                                                                      | [components.FallbackConfig](../../models/components/fallbackconfig.md)[]                         | :heavy_minus_sign:                                                                               | Deprecated: use top-level fallbacks instead.                                                     |
| `identity`                                                                                       | [components.ResponseIdentity](../../models/components/responseidentity.md)                       | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `loadBalancer`                                                                                   | [components.EmbeddingLoadBalancerConfig](../../models/components/embeddingloadbalancerconfig.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `name`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | Deprecated: use top-level name instead.                                                          |
| `retry`                                                                                          | [components.EmbeddingRetryConfig](../../models/components/embeddingretryconfig.md)               | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `timeout`                                                                                        | [components.EmbeddingTimeoutConfig](../../models/components/embeddingtimeoutconfig.md)           | :heavy_minus_sign:                                                                               | N/A                                                                                              |