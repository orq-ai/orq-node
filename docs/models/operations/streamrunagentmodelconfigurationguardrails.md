# StreamRunAgentModelConfigurationGuardrails

## Example Usage

```typescript
import { StreamRunAgentModelConfigurationGuardrails } from "@orq-ai/node/models/operations";

let value: StreamRunAgentModelConfigurationGuardrails = {
  id: "<id>",
  executeOn: "output",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                         | *operations.StreamRunAgentModelConfigurationId*                                                                              | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `executeOn`                                                                                                                  | [operations.StreamRunAgentModelConfigurationExecuteOn](../../models/operations/streamrunagentmodelconfigurationexecuteon.md) | :heavy_check_mark:                                                                                                           | Determines whether the guardrail runs on the input (user message) or output (model response).                                |