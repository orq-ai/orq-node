# CreateTranslationOrq

## Example Usage

```typescript
import { CreateTranslationOrq } from "@orq-ai/node/models/operations";

let value: CreateTranslationOrq = {
  fallbacks: [
    {
      model: "openai/gpt-4o-mini",
    },
  ],
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
| `fallbacks`                                                                                                                                        | [operations.CreateTranslationFallbacks](../../models/operations/createtranslationfallbacks.md)[]                                                   | :heavy_minus_sign:                                                                                                                                 | Array of fallback models to use if primary model fails                                                                                             |                                                                                                                                                    |
| `retry`                                                                                                                                            | [operations.CreateTranslationRetry](../../models/operations/createtranslationretry.md)                                                             | :heavy_minus_sign:                                                                                                                                 | Retry configuration for the request                                                                                                                |                                                                                                                                                    |
| `identity`                                                                                                                                         | [components.PublicContact](../../models/components/publiccontact.md)                                                                               | :heavy_minus_sign:                                                                                                                                 | Information about the identity making the request. If the identity does not exist, it will be created automatically.                               |                                                                                                                                                    |
| `contact`                                                                                                                                          | [operations.CreateTranslationContact](../../models/operations/createtranslationcontact.md)                                                         | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |                                                                                                                                                    |
| `loadBalancer`                                                                                                                                     | *operations.CreateTranslationLoadBalancer*[]                                                                                                       | :heavy_minus_sign:                                                                                                                                 | Array of models with weights for load balancing requests                                                                                           | [<br/>{<br/>"model": "openai/gpt-4o",<br/>"weight": 0.7<br/>},<br/>{<br/>"model": "anthropic/claude-3-5-sonnet",<br/>"weight": 0.3<br/>}<br/>]     |
| `timeout`                                                                                                                                          | [operations.CreateTranslationTimeout](../../models/operations/createtranslationtimeout.md)                                                         | :heavy_minus_sign:                                                                                                                                 | Timeout configuration to apply to the request. If the request exceeds the timeout, it will be retried or fallback to the next model if configured. |                                                                                                                                                    |