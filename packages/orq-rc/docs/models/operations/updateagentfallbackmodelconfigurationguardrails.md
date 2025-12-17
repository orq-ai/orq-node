# UpdateAgentFallbackModelConfigurationGuardrails

## Example Usage

```typescript
import { UpdateAgentFallbackModelConfigurationGuardrails } from "@orq-ai/node/models/operations";

let value: UpdateAgentFallbackModelConfigurationGuardrails = {
  id: "orq_pii_detection",
  executeOn: "output",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                   | *operations.UpdateAgentFallbackModelConfigurationId*                                                                                   | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `executeOn`                                                                                                                            | [operations.UpdateAgentFallbackModelConfigurationExecuteOn](../../models/operations/updateagentfallbackmodelconfigurationexecuteon.md) | :heavy_check_mark:                                                                                                                     | Determines whether the guardrail runs on the input (user message) or output (model response).                                          |