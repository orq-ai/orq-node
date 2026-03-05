# RetrieveAgentRequestResponseBodyAgentsGuardrails

## Example Usage

```typescript
import { RetrieveAgentRequestResponseBodyAgentsGuardrails } from "@orq-ai/node/models/operations";

let value: RetrieveAgentRequestResponseBodyAgentsGuardrails = {
  id: "<id>",
  executeOn: "output",
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                     | *operations.RetrieveAgentRequestResponseBodyId*                                                                                                          | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `executeOn`                                                                                                                                              | [operations.RetrieveAgentRequestResponseBodyAgentsResponseExecuteOn](../../models/operations/retrieveagentrequestresponsebodyagentsresponseexecuteon.md) | :heavy_check_mark:                                                                                                                                       | Determines whether the guardrail runs on the input (user message) or output (model response).                                                            |