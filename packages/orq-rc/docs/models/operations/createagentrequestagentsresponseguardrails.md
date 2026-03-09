# CreateAgentRequestAgentsResponseGuardrails

## Example Usage

```typescript
import { CreateAgentRequestAgentsResponseGuardrails } from "@orq-ai/node/models/operations";

let value: CreateAgentRequestAgentsResponseGuardrails = {
  id: "orq_pii_detection",
  executeOn: "input",
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                             | *operations.CreateAgentRequestId*                                                                                                                                | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `executeOn`                                                                                                                                                      | [operations.CreateAgentRequestAgentsResponse201ApplicationJSONExecuteOn](../../models/operations/createagentrequestagentsresponse201applicationjsonexecuteon.md) | :heavy_check_mark:                                                                                                                                               | Determines whether the guardrail runs on the input (user message) or output (model response).                                                                    |