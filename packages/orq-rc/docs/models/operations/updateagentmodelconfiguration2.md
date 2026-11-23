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
        model: "openai/gpt-5.4-mini",
      },
    ],
    cache: {
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
  },
  retry: {
    count: 2,
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

| Field                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                                                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                        | A model ID string (e.g., `openai/gpt-5.6-sol` or `anthropic/claude-sonnet-5`). Only models that support tool calling can be used with agents.                                                                                                                                                                                                                                                                                                             |
| `parameters`                                                                                                                                                                                                                                                                                                                                                                                                                                              | [operations.ModelConfigurationParameters](../../models/operations/modelconfigurationparameters.md)                                                                                                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                        | Model behavior parameters that control how the model generates responses. Common parameters: `temperature` (0-2, randomness; the selected model may impose a lower maximum), `max_completion_tokens` (max output length), `top_p` (sampling diversity). Advanced: `frequency_penalty`, `presence_penalty`, `response_format` (JSON/structured), `reasoning_effort`, `seed` (reproducibility). Support varies by model - consult AI Gateway documentation. |
| `retry`                                                                                                                                                                                                                                                                                                                                                                                                                                                   | [operations.ModelConfigurationRetry](../../models/operations/modelconfigurationretry.md)                                                                                                                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                        | Retry configuration for model requests. Allows customizing retry count (0-5) and HTTP status codes that trigger retries. Default codes: 408, 429, 500, 502, 503, 504, 529.                                                                                                                                                                                                                                                                                |