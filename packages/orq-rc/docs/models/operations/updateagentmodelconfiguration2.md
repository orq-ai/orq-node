# UpdateAgentModelConfiguration2



Model configuration with parameters and retry settings.

## Example Usage

```typescript
import { UpdateAgentModelConfiguration2 } from "@orq-ai/node/models/operations";

let value: UpdateAgentModelConfiguration2 = {
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

| Field                                                                                                                                                                                                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                         | A model ID string (e.g., `openai/gpt-4o` or `anthropic/claude-haiku-4-5-20251001`). Only models that support tool calling can be used with agents.                                                                                                                                                                                                                                                         |
| `parameters`                                                                                                                                                                                                                                                                                                                                                                                               | [operations.ModelConfigurationParameters](../../models/operations/modelconfigurationparameters.md)                                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                         | Model behavior parameters that control how the model generates responses. Common parameters: `temperature` (0-1, randomness), `max_completion_tokens` (max output length), `top_p` (sampling diversity). Advanced: `frequency_penalty`, `presence_penalty`, `response_format` (JSON/structured), `reasoning_effort`, `seed` (reproducibility). Support varies by model - consult AI Gateway documentation. |
| `retry`                                                                                                                                                                                                                                                                                                                                                                                                    | [operations.UpdateAgentModelConfigurationAgentsRetry](../../models/operations/updateagentmodelconfigurationagentsretry.md)                                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                         | Retry configuration for model requests. Retries are triggered for specific HTTP status codes (e.g., 500, 429, 502, 503, 504). Supports configurable retry count (1-5) and custom status codes.                                                                                                                                                                                                             |