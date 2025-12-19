# ModelConfigurationGuardrails

## Example Usage

```typescript
import { ModelConfigurationGuardrails } from "@orq-ai/node/models/operations";

let value: ModelConfigurationGuardrails = {
  id: "<id>",
  executeOn: "output",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *operations.ModelConfigurationId*                                                                | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `executeOn`                                                                                      | [operations.ModelConfigurationExecuteOn](../../models/operations/modelconfigurationexecuteon.md) | :heavy_check_mark:                                                                               | Determines whether the guardrail runs on the input (user message) or output (model response).    |