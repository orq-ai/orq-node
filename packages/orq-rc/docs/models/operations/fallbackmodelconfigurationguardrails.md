# FallbackModelConfigurationGuardrails

## Example Usage

```typescript
import { FallbackModelConfigurationGuardrails } from "@orq-ai/node/models/operations";

let value: FallbackModelConfigurationGuardrails = {
  id: "orq_harmful_moderation",
  executeOn: "output",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *operations.FallbackModelConfigurationId*                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `executeOn`                                                                                                      | [operations.FallbackModelConfigurationExecuteOn](../../models/operations/fallbackmodelconfigurationexecuteon.md) | :heavy_check_mark:                                                                                               | Determines whether the guardrail runs on the input (user message) or output (model response).                    |