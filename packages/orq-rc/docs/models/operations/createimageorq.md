# CreateImageOrq

## Example Usage

```typescript
import { CreateImageOrq } from "@orq-ai/node/models/operations";

let value: CreateImageOrq = {
  retry: {
    onCodes: [
      429,
      500,
      502,
      503,
      504,
    ],
  },
  fallbacks: [
    {
      model: "openai/gpt-4o-mini",
    },
  ],
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
  cache: {
    ttl: 3600,
    type: "exact_match",
  },
  loadBalancer: [
    {
      type: "weight_based",
      model: "openai/gpt-4o",
      weight: 0.7,
    },
    {
      type: "weight_based",
      model: "openai/gpt-4o",
      weight: 0.7,
    },
  ],
  timeout: {
    callTimeout: 30000,
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        | Example                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                             | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The name to display on the trace. If not specified, the default system name will be used.                                                          |                                                                                                                                                    |
| `retry`                                                                                                                                            | [operations.CreateImageRetry](../../models/operations/createimageretry.md)                                                                         | :heavy_minus_sign:                                                                                                                                 | Retry configuration for the request                                                                                                                |                                                                                                                                                    |
| `fallbacks`                                                                                                                                        | [operations.CreateImageFallbacks](../../models/operations/createimagefallbacks.md)[]                                                               | :heavy_minus_sign:                                                                                                                                 | Array of fallback models to use if primary model fails                                                                                             |                                                                                                                                                    |
| `contact`                                                                                                                                          | [components.PublicContact](../../models/components/publiccontact.md)                                                                               | :heavy_minus_sign:                                                                                                                                 | Information about the contact making the request. If the contact does not exist, it will be created automatically.                                 |                                                                                                                                                    |
| `cache`                                                                                                                                            | [operations.CreateImageCache](../../models/operations/createimagecache.md)                                                                         | :heavy_minus_sign:                                                                                                                                 | Cache configuration for the request.                                                                                                               |                                                                                                                                                    |
| `loadBalancer`                                                                                                                                     | *operations.CreateImageLoadBalancer*[]                                                                                                             | :heavy_minus_sign:                                                                                                                                 | Array of models with weights for load balancing requests                                                                                           | [<br/>{<br/>"model": "openai/gpt-4o",<br/>"weight": 0.7<br/>},<br/>{<br/>"model": "anthropic/claude-3-5-sonnet",<br/>"weight": 0.3<br/>}<br/>]     |
| `timeout`                                                                                                                                          | [operations.CreateImageTimeout](../../models/operations/createimagetimeout.md)                                                                     | :heavy_minus_sign:                                                                                                                                 | Timeout configuration to apply to the request. If the request exceeds the timeout, it will be retried or fallback to the next model if configured. |                                                                                                                                                    |