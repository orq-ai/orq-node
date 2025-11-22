# StreamRunAgentDataAgentsResponse200TextEventStreamData

## Example Usage

```typescript
import { StreamRunAgentDataAgentsResponse200TextEventStreamData } from "@orq-ai/node/models/operations";

let value: StreamRunAgentDataAgentsResponse200TextEventStreamData = {
  agentId: "<id>",
  actionId: "<id>",
  requiresApproval: false,
  tool: {
    id: "<id>",
    actionType: "<value>",
  },
  input: {},
  agentToolCallId: "<id>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `agentId`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `actionId`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `requiresApproval`                                                                     | *boolean*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `tool`                                                                                 | [operations.StreamRunAgentDataTool](../../models/operations/streamrunagentdatatool.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `input`                                                                                | Record<string, *any*>                                                                  | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `agentToolCallId`                                                                      | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `responseId`                                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |