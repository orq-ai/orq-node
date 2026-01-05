# RunAgentFallbackModelConfigurationGuardrails

## Example Usage

```typescript
import { RunAgentFallbackModelConfigurationGuardrails } from "@orq-ai/node/models/operations";

let value: RunAgentFallbackModelConfigurationGuardrails = {
  id: "<id>",
  executeOn: "output",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                             | *operations.RunAgentFallbackModelConfigurationId*                                                                                | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `executeOn`                                                                                                                      | [operations.RunAgentFallbackModelConfigurationExecuteOn](../../models/operations/runagentfallbackmodelconfigurationexecuteon.md) | :heavy_check_mark:                                                                                                               | Determines whether the guardrail runs on the input (user message) or output (model response).                                    |