# CreateEmbeddingOrq

## Example Usage

```typescript
import { CreateEmbeddingOrq } from "@orq-ai/node/models/operations";

let value: CreateEmbeddingOrq = {
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
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        | Example                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                             | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The name to display on the trace. If not specified, the default system name will be used.                                                          |                                                                                                                                                    |
| `fallbacks`                                                                                                                                        | [operations.CreateEmbeddingFallbacks](../../models/operations/createembeddingfallbacks.md)[]                                                       | :heavy_minus_sign:                                                                                                                                 | Array of fallback models to use if primary model fails                                                                                             |                                                                                                                                                    |
| `cache`                                                                                                                                            | [operations.CreateEmbeddingCache](../../models/operations/createembeddingcache.md)                                                                 | :heavy_minus_sign:                                                                                                                                 | Cache configuration for the request.                                                                                                               |                                                                                                                                                    |
| `retry`                                                                                                                                            | [operations.CreateEmbeddingRetry](../../models/operations/createembeddingretry.md)                                                                 | :heavy_minus_sign:                                                                                                                                 | Retry configuration for the request                                                                                                                |                                                                                                                                                    |
| `identity`                                                                                                                                         | [components.PublicContact](../../models/components/publiccontact.md)                                                                               | :heavy_minus_sign:                                                                                                                                 | Information about the identity making the request. If the identity does not exist, it will be created automatically.                               |                                                                                                                                                    |
| `contact`                                                                                                                                          | [operations.CreateEmbeddingContact](../../models/operations/createembeddingcontact.md)                                                             | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |                                                                                                                                                    |
| `loadBalancer`                                                                                                                                     | *operations.CreateEmbeddingLoadBalancer*                                                                                                           | :heavy_minus_sign:                                                                                                                                 | Array of models with weights for load balancing requests                                                                                           | {<br/>"type": "weight_based",<br/>"models": [<br/>{<br/>"model": "openai/gpt-4o",<br/>"weight": 0.7<br/>},<br/>{<br/>"model": "anthropic/claude-3-5-sonnet",<br/>"weight": 0.3<br/>}<br/>]<br/>} |
| `timeout`                                                                                                                                          | [operations.CreateEmbeddingTimeout](../../models/operations/createembeddingtimeout.md)                                                             | :heavy_minus_sign:                                                                                                                                 | Timeout configuration to apply to the request. If the request exceeds the timeout, it will be retried or fallback to the next model if configured. |                                                                                                                                                    |