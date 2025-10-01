# RetrieveAgentsTool

Retrieves available agents in the system

## Example Usage

```typescript
import { RetrieveAgentsTool } from "@orq-ai/node/models/operations";

let value: RetrieveAgentsTool = {
  type: "retrieve_agents",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                             | [operations.RunAgentRunAgentRequestToolAgentsRequestType](../../models/operations/runagentrunagentrequesttoolagentsrequesttype.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `requiresApproval`                                                                                                                 | *boolean*                                                                                                                          | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |