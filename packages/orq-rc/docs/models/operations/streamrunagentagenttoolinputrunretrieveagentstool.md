# StreamRunAgentAgentToolInputRunRetrieveAgentsTool

Retrieves available agents in the system

## Example Usage

```typescript
import { StreamRunAgentAgentToolInputRunRetrieveAgentsTool } from "@orq-ai/node/models/operations";

let value: StreamRunAgentAgentToolInputRunRetrieveAgentsTool = {
  type: "retrieve_agents",
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                           | [operations.StreamRunAgentAgentToolInputRunAgentsRequestRequestBodyType](../../models/operations/streamrunagentagenttoolinputrunagentsrequestrequestbodytype.md) | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `requiresApproval`                                                                                                                                               | *boolean*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                               | Whether this tool requires approval before execution                                                                                                             |