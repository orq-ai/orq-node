# CreateImageVariationOrq

## Example Usage

```typescript
import { CreateImageVariationOrq } from "@orq-ai/node/models/operations";

let value: CreateImageVariationOrq = {
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
  prompt: {
    id: "prompt_01ARZ3NDEKTSV4RRFFQ69G5FAV",
    version: "latest",
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
  cache: {
    ttl: 3600,
    type: "exact_match",
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

| Field                                                                                                                                                                                                        | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  | Example                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                                                                                                                       | *string*                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                           | The name to display on the trace. If not specified, the default system name will be used.                                                                                                                    |                                                                                                                                                                                                              |
| `retry`                                                                                                                                                                                                      | [operations.CreateImageVariationRouterImagesVariationsRetry](../../models/operations/createimagevariationrouterimagesvariationsretry.md)                                                                     | :heavy_minus_sign:                                                                                                                                                                                           | Retry configuration for the request                                                                                                                                                                          |                                                                                                                                                                                                              |
| `fallbacks`                                                                                                                                                                                                  | [operations.CreateImageVariationRouterImagesVariationsFallbacks](../../models/operations/createimagevariationrouterimagesvariationsfallbacks.md)[]                                                           | :heavy_minus_sign:                                                                                                                                                                                           | Array of fallback models to use if primary model fails                                                                                                                                                       |                                                                                                                                                                                                              |
| `prompt`                                                                                                                                                                                                     | [operations.CreateImageVariationPrompt](../../models/operations/createimagevariationprompt.md)                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                           | Prompt configuration for the request                                                                                                                                                                         |                                                                                                                                                                                                              |
| `identity`                                                                                                                                                                                                   | [components.PublicIdentity](../../models/components/publicidentity.md)                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                           | Information about the identity making the request. If the identity does not exist, it will be created automatically.                                                                                         |                                                                                                                                                                                                              |
| ~~`contact`~~                                                                                                                                                                                                | [components.PublicContact](../../models/components/publiccontact.md)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                           | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>@deprecated Use identity instead. Information about the contact making the request. |                                                                                                                                                                                                              |
| `cache`                                                                                                                                                                                                      | [operations.CreateImageVariationRouterImagesVariationsCache](../../models/operations/createimagevariationrouterimagesvariationscache.md)                                                                     | :heavy_minus_sign:                                                                                                                                                                                           | Cache configuration for the request.                                                                                                                                                                         |                                                                                                                                                                                                              |
| `loadBalancer`                                                                                                                                                                                               | *operations.CreateImageVariationRouterImagesVariationsLoadBalancer*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                           | Array of models with weights for load balancing requests                                                                                                                                                     | {<br/>"type": "weight_based",<br/>"models": [<br/>{<br/>"model": "openai/gpt-4o",<br/>"weight": 0.7<br/>},<br/>{<br/>"model": "anthropic/claude-3-5-sonnet",<br/>"weight": 0.3<br/>}<br/>]<br/>}             |
| `timeout`                                                                                                                                                                                                    | [operations.CreateImageVariationRouterImagesVariationsTimeout](../../models/operations/createimagevariationrouterimagesvariationstimeout.md)                                                                 | :heavy_minus_sign:                                                                                                                                                                                           | Timeout configuration to apply to the request. If the request exceeds the timeout, it will be retried or fallback to the next model if configured.                                                           |                                                                                                                                                                                                              |