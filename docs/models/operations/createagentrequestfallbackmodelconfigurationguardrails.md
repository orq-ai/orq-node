# CreateAgentRequestFallbackModelConfigurationGuardrails

## Example Usage

```typescript
import { CreateAgentRequestFallbackModelConfigurationGuardrails } from "@orq-ai/node/models/operations";

let value: CreateAgentRequestFallbackModelConfigurationGuardrails = {
  id: "<id>",
  executeOn: "output",
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                 | *operations.CreateAgentRequestFallbackModelConfigurationId*                                                                                          | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `executeOn`                                                                                                                                          | [operations.CreateAgentRequestFallbackModelConfigurationExecuteOn](../../models/operations/createagentrequestfallbackmodelconfigurationexecuteon.md) | :heavy_check_mark:                                                                                                                                   | Determines whether the guardrail runs on the input (user message) or output (model response).                                                        |