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

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [operations.RunAgentAgentToolInputRunAgentsRequestType](../../models/operations/runagentagenttoolinputrunagentsrequesttype.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `requiresApproval`                                                                                                             | *boolean*                                                                                                                      | :heavy_minus_sign:                                                                                                             | Whether this tool requires approval before execution                                                                           |