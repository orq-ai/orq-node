# CreateEmbeddingRouterEmbeddingsCache

Cache configuration for the request.

## Example Usage

```typescript
import { CreateEmbeddingRouterEmbeddingsCache } from "@orq-ai/node/models/operations";

let value: CreateEmbeddingRouterEmbeddingsCache = {
  ttl: 3600,
  type: "exact_match",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `ttl`                                                                                                            | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | Time to live for cached responses in seconds. Maximum 259200 seconds (3 days).                                   | 3600                                                                                                             |
| `type`                                                                                                           | [operations.CreateEmbeddingRouterEmbeddingsType](../../models/operations/createembeddingrouterembeddingstype.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |