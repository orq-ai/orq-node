# RunAgentFallbackModelConfiguration2

Fallback model configuration with optional parameters and retry settings.

## Example Usage

```typescript
import { RunAgentFallbackModelConfiguration2 } from "@orq-ai/node/models/operations";

let value: RunAgentFallbackModelConfiguration2 = {
  id: "<id>",
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

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | A fallback model ID string. Must support tool calling.                                                                             |
| `parameters`                                                                                                                       | [operations.RunAgentFallbackModelConfigurationParameters](../../models/operations/runagentfallbackmodelconfigurationparameters.md) | :heavy_minus_sign:                                                                                                                 | Optional model parameters specific to this fallback model. Overrides primary model parameters if this fallback is used.            |
| `retry`                                                                                                                            | [operations.RunAgentFallbackModelConfigurationRetry](../../models/operations/runagentfallbackmodelconfigurationretry.md)           | :heavy_minus_sign:                                                                                                                 | Retry configuration for this fallback model. Allows customizing retry count (1-5) and HTTP status codes that trigger retries.      |