# AgentToolInputRunCallSubAgentTool

Delegates tasks to specialized sub-agents

## Example Usage

```typescript
import { AgentToolInputRunCallSubAgentTool } from "@orq-ai/node/models/operations";

let value: AgentToolInputRunCallSubAgentTool = {
  type: "call_sub_agent",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [operations.RunAgentAgentToolInputRunAgentsType](../../models/operations/runagentagenttoolinputrunagentstype.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `requiresApproval`                                                                                               | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | Whether this tool requires approval before execution                                                             |