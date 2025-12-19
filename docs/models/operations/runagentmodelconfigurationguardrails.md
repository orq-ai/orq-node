# RunAgentModelConfigurationGuardrails

## Example Usage

```typescript
import { RunAgentModelConfigurationGuardrails } from "@orq-ai/node/models/operations";

let value: RunAgentModelConfigurationGuardrails = {
  id: "orq_pii_detection",
  executeOn: "input",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *operations.RunAgentModelConfigurationId*                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `executeOn`                                                                                                      | [operations.RunAgentModelConfigurationExecuteOn](../../models/operations/runagentmodelconfigurationexecuteon.md) | :heavy_check_mark:                                                                                               | Determines whether the guardrail runs on the input (user message) or output (model response).                    |