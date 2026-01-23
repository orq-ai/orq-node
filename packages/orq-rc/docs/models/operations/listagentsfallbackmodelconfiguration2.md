# ListAgentsFallbackModelConfiguration2

Fallback model configuration with optional parameters and retry settings.

## Example Usage

```typescript
import { ListAgentsFallbackModelConfiguration2 } from "@orq-ai/node/models/operations";

let value: ListAgentsFallbackModelConfiguration2 = {
  id: "<id>",
  parameters: {
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
      ],
    },
    timeout: {
      callTimeout: 30000,
    },
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
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                   | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | A fallback model ID string. Must support tool calling.                                                                                 |
| `parameters`                                                                                                                           | [operations.ListAgentsFallbackModelConfigurationParameters](../../models/operations/listagentsfallbackmodelconfigurationparameters.md) | :heavy_minus_sign:                                                                                                                     | Optional model parameters specific to this fallback model. Overrides primary model parameters if this fallback is used.                |
| `retry`                                                                                                                                | [operations.ListAgentsFallbackModelConfigurationRetry](../../models/operations/listagentsfallbackmodelconfigurationretry.md)           | :heavy_minus_sign:                                                                                                                     | Retry configuration for this fallback model. Allows customizing retry count (1-5) and HTTP status codes that trigger retries.          |