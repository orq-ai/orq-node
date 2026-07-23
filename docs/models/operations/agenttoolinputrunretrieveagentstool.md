# AgentToolInputRunRetrieveAgentsTool

Retrieves available agents in the system

## Example Usage

```typescript
import { AgentToolInputRunRetrieveAgentsTool } from "@orq-ai/node/models/operations";

let value: AgentToolInputRunRetrieveAgentsTool = {
  type: "retrieve_agents",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `type`                                                                                              | *"retrieve_agents"*                                                                                 | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `requiresApproval`                                                                                  | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Whether this tool requires approval before execution                                                |
| `configuration`                                                                                     | Record<string, *any*>                                                                               | :heavy_minus_sign:                                                                                  | Static tool configuration set at design time. Merged over LLM-provided arguments at execution time. |