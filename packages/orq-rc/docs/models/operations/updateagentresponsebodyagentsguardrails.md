# UpdateAgentResponseBodyAgentsGuardrails

## Example Usage

```typescript
import { UpdateAgentResponseBodyAgentsGuardrails } from "@orq-ai/node/models/operations";

let value: UpdateAgentResponseBodyAgentsGuardrails = {
  id: "<id>",
  executeOn: "output",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                   | *operations.UpdateAgentResponseBodyId*                                                                                                 | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `executeOn`                                                                                                                            | [operations.UpdateAgentResponseBodyAgentsResponseExecuteOn](../../models/operations/updateagentresponsebodyagentsresponseexecuteon.md) | :heavy_check_mark:                                                                                                                     | Determines whether the guardrail runs on the input (user message) or output (model response).                                          |