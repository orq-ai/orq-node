# UpdateAgentFallbackModelConfigurationAgentsGuardrails

## Example Usage

```typescript
import { UpdateAgentFallbackModelConfigurationAgentsGuardrails } from "@orq-ai/node/models/operations";

let value: UpdateAgentFallbackModelConfigurationAgentsGuardrails = {
  id: "<id>",
  executeOn: "output",
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                               | *operations.UpdateAgentFallbackModelConfigurationAgentsId*                                                                                         | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `executeOn`                                                                                                                                        | [operations.UpdateAgentFallbackModelConfigurationAgentsExecuteOn](../../models/operations/updateagentfallbackmodelconfigurationagentsexecuteon.md) | :heavy_check_mark:                                                                                                                                 | Determines whether the guardrail runs on the input (user message) or output (model response).                                                      |