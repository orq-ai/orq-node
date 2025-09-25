# RunAgentRequestToolCallSubAgentTool

Delegates tasks to specialized sub-agents

## Example Usage

```typescript
import { RunAgentRequestToolCallSubAgentTool } from "@orq-ai/node/models/operations";

let value: RunAgentRequestToolCallSubAgentTool = {
  type: "call_sub_agent",
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                         | [operations.StreamRunAgentRunAgentRequestToolAgentsRequestType](../../models/operations/streamrunagentrunagentrequesttoolagentsrequesttype.md) | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `requiresApproval`                                                                                                                             | *boolean*                                                                                                                                      | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |