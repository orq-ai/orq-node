# StreamAgentDataAgentsResponse200TextEventStreamResponseBodyData

## Example Usage

```typescript
import { StreamAgentDataAgentsResponse200TextEventStreamResponseBodyData } from "@orq-ai/node/models/operations";

let value: StreamAgentDataAgentsResponse200TextEventStreamResponseBodyData = {
  agentId: "<id>",
  actionId: "<id>",
  requiresApproval: true,
  tool: {
    id: "<id>",
    actionType: "<value>",
  },
  input: {
    "key": "<value>",
    "key1": "<value>",
  },
  agentToolCallId: "<id>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `agentId`                                                  | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `actionId`                                                 | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `requiresApproval`                                         | *boolean*                                                  | :heavy_check_mark:                                         | N/A                                                        |
| `tool`                                                     | [operations.DataTool](../../models/operations/datatool.md) | :heavy_check_mark:                                         | N/A                                                        |
| `input`                                                    | Record<string, *any*>                                      | :heavy_check_mark:                                         | N/A                                                        |
| `agentToolCallId`                                          | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |