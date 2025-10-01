# RunAgentRequestToolRetrieveAgentsTool

Retrieves available agents in the system

## Example Usage

```typescript
import { RunAgentRequestToolRetrieveAgentsTool } from "@orq-ai/node/models/operations";

let value: RunAgentRequestToolRetrieveAgentsTool = {
  type: "retrieve_agents",
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                               | [operations.StreamRunAgentRunAgentRequestToolAgentsRequestRequestBodyType](../../models/operations/streamrunagentrunagentrequesttoolagentsrequestrequestbodytype.md) | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `requiresApproval`                                                                                                                                                   | *boolean*                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                   | N/A                                                                                                                                                                  |