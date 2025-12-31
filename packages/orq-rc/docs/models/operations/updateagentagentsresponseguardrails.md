# UpdateAgentAgentsResponseGuardrails

## Example Usage

```typescript
import { UpdateAgentAgentsResponseGuardrails } from "@orq-ai/node/models/operations";

let value: UpdateAgentAgentsResponseGuardrails = {
  id: "orq_sexual_moderation",
  executeOn: "output",
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                               | *operations.UpdateAgentId*                                                                                                                         | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `executeOn`                                                                                                                                        | [operations.UpdateAgentAgentsResponse200ApplicationJSONExecuteOn](../../models/operations/updateagentagentsresponse200applicationjsonexecuteon.md) | :heavy_check_mark:                                                                                                                                 | Determines whether the guardrail runs on the input (user message) or output (model response).                                                      |