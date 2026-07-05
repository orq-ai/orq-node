# AgentToolInputCRUDCallSubAgentTool

Delegates tasks to specialized sub-agents

## Example Usage

```typescript
import { AgentToolInputCRUDCallSubAgentTool } from "@orq-ai/node/models/operations";

let value: AgentToolInputCRUDCallSubAgentTool = {
  type: "call_sub_agent",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                 | [operations.UpdateAgentAgentToolInputCRUDAgentsRequestType](../../models/operations/updateagentagenttoolinputcrudagentsrequesttype.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `requiresApproval`                                                                                                                     | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | Whether this tool requires approval before execution                                                                                   |
| `configuration`                                                                                                                        | Record<string, *any*>                                                                                                                  | :heavy_minus_sign:                                                                                                                     | Static tool configuration set at design time. Merged over LLM-provided arguments at execution time.                                    |