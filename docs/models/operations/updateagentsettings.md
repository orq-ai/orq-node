# UpdateAgentSettings

## Example Usage

```typescript
import { UpdateAgentSettings } from "@orq-ai/node/models/operations";

let value: UpdateAgentSettings = {
  tools: [
    {
      type: "mcp",
      id: "01KA84ND5J0SWQMA2Q8HY5WZZZ",
      toolId: "01KXYZ123456789",
      requiresApproval: false,
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `maxIterations`                                                                                          | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `maxExecutionTime`                                                                                       | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `maxCost`                                                                                                | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `toolApprovalRequired`                                                                                   | [operations.UpdateAgentToolApprovalRequired](../../models/operations/updateagenttoolapprovalrequired.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `tools`                                                                                                  | *operations.UpdateAgentAgentToolInputCRUD*[]                                                             | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `evaluators`                                                                                             | [operations.UpdateAgentEvaluators](../../models/operations/updateagentevaluators.md)[]                   | :heavy_minus_sign:                                                                                       | Configuration for an evaluator applied to the agent                                                      |
| `guardrails`                                                                                             | [operations.UpdateAgentGuardrails](../../models/operations/updateagentguardrails.md)[]                   | :heavy_minus_sign:                                                                                       | Configuration for a guardrail applied to the agent                                                       |