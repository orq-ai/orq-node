# RetrieveAgentRequestFallbackModelConfigurationGuardrails

## Example Usage

```typescript
import { RetrieveAgentRequestFallbackModelConfigurationGuardrails } from "@orq-ai/node/models/operations";

let value: RetrieveAgentRequestFallbackModelConfigurationGuardrails = {
  id: "<id>",
  executeOn: "input",
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                     | *operations.RetrieveAgentRequestFallbackModelConfigurationId*                                                                                            | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `executeOn`                                                                                                                                              | [operations.RetrieveAgentRequestFallbackModelConfigurationExecuteOn](../../models/operations/retrieveagentrequestfallbackmodelconfigurationexecuteon.md) | :heavy_check_mark:                                                                                                                                       | Determines whether the guardrail runs on the input (user message) or output (model response).                                                            |