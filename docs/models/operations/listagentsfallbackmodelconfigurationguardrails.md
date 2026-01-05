# ListAgentsFallbackModelConfigurationGuardrails

## Example Usage

```typescript
import { ListAgentsFallbackModelConfigurationGuardrails } from "@orq-ai/node/models/operations";

let value: ListAgentsFallbackModelConfigurationGuardrails = {
  id: "<id>",
  executeOn: "output",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                 | *operations.ListAgentsFallbackModelConfigurationId*                                                                                  | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `executeOn`                                                                                                                          | [operations.ListAgentsFallbackModelConfigurationExecuteOn](../../models/operations/listagentsfallbackmodelconfigurationexecuteon.md) | :heavy_check_mark:                                                                                                                   | Determines whether the guardrail runs on the input (user message) or output (model response).                                        |