# RetrieveAgentRequestAgentsGuardrails

## Example Usage

```typescript
import { RetrieveAgentRequestAgentsGuardrails } from "@orq-ai/node/models/operations";

let value: RetrieveAgentRequestAgentsGuardrails = {
  id: "orq_pii_detection",
  executeOn: "input",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                             | *operations.RetrieveAgentRequestId*                                                                                              | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `executeOn`                                                                                                                      | [operations.RetrieveAgentRequestAgentsResponseExecuteOn](../../models/operations/retrieveagentrequestagentsresponseexecuteon.md) | :heavy_check_mark:                                                                                                               | Determines whether the guardrail runs on the input (user message) or output (model response).                                    |