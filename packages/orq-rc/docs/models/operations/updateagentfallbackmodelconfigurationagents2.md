# UpdateAgentFallbackModelConfigurationAgents2

Fallback model configuration with optional parameters and retry settings.

## Example Usage

```typescript
import { UpdateAgentFallbackModelConfigurationAgents2 } from "@orq-ai/node/models/operations";

let value: UpdateAgentFallbackModelConfigurationAgents2 = {
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

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                 | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | A fallback model ID string. Must support tool calling.                                                                                               |
| `parameters`                                                                                                                                         | [operations.UpdateAgentFallbackModelConfigurationAgentsParameters](../../models/operations/updateagentfallbackmodelconfigurationagentsparameters.md) | :heavy_minus_sign:                                                                                                                                   | Optional model parameters specific to this fallback model. Overrides primary model parameters if this fallback is used.                              |
| `retry`                                                                                                                                              | [operations.UpdateAgentFallbackModelConfigurationAgentsRetry](../../models/operations/updateagentfallbackmodelconfigurationagentsretry.md)           | :heavy_minus_sign:                                                                                                                                   | Retry configuration for this fallback model. Allows customizing retry count (1-5) and HTTP status codes that trigger retries.                        |