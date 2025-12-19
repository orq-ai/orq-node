# StreamRunAgentFallbackModelConfigurationGuardrails

## Example Usage

```typescript
import { StreamRunAgentFallbackModelConfigurationGuardrails } from "@orq-ai/node/models/operations";

let value: StreamRunAgentFallbackModelConfigurationGuardrails = {
  id: "orq_pii_detection",
  executeOn: "output",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                         | *operations.StreamRunAgentFallbackModelConfigurationId*                                                                                      | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `executeOn`                                                                                                                                  | [operations.StreamRunAgentFallbackModelConfigurationExecuteOn](../../models/operations/streamrunagentfallbackmodelconfigurationexecuteon.md) | :heavy_check_mark:                                                                                                                           | Determines whether the guardrail runs on the input (user message) or output (model response).                                                |