# CreateAgentRequestFallbackModelConfiguration2

Fallback model configuration with optional parameters and retry settings.

## Example Usage

```typescript
import { CreateAgentRequestFallbackModelConfiguration2 } from "@orq-ai/node/models/operations";

let value: CreateAgentRequestFallbackModelConfiguration2 = {
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

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                   | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | A fallback model ID string. Must support tool calling.                                                                                                 |
| `parameters`                                                                                                                                           | [operations.CreateAgentRequestFallbackModelConfigurationParameters](../../models/operations/createagentrequestfallbackmodelconfigurationparameters.md) | :heavy_minus_sign:                                                                                                                                     | Optional model parameters specific to this fallback model. Overrides primary model parameters if this fallback is used.                                |
| `retry`                                                                                                                                                | [operations.CreateAgentRequestFallbackModelConfigurationRetry](../../models/operations/createagentrequestfallbackmodelconfigurationretry.md)           | :heavy_minus_sign:                                                                                                                                     | Retry configuration for this fallback model. Allows customizing retry count (1-5) and HTTP status codes that trigger retries.                          |