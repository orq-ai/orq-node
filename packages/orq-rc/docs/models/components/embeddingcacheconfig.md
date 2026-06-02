# EmbeddingCacheConfig

## Example Usage

```typescript
import { EmbeddingCacheConfig } from "@orq-ai/node/models/components";

let value: EmbeddingCacheConfig = {
  type: "exact_match",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `ttl`                                                                                      | *number*                                                                                   | :heavy_minus_sign:                                                                         | Time to live for cached responses in seconds. Maximum 259200 seconds (3 days).             |
| `type`                                                                                     | [components.EmbeddingCacheConfigType](../../models/components/embeddingcacheconfigtype.md) | :heavy_check_mark:                                                                         | Cache type.                                                                                |