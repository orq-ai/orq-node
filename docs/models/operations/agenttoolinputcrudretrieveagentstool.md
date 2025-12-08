# AgentToolInputCRUDRetrieveAgentsTool

Retrieves available agents in the system

## Example Usage

```typescript
import { AgentToolInputCRUDRetrieveAgentsTool } from "@orq-ai/node/models/operations";

let value: AgentToolInputCRUDRetrieveAgentsTool = {
  type: "retrieve_agents",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | *"retrieve_agents"*                                  | :heavy_check_mark:                                   | N/A                                                  |
| `requiresApproval`                                   | *boolean*                                            | :heavy_minus_sign:                                   | Whether this tool requires approval before execution |