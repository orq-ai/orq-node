# MessageDifference

## Example Usage

```typescript
import { MessageDifference } from "@orq-ai/node/models/operations";

let value: MessageDifference = {
  messageId: "<id>",
  role: "system",
  parts: [],
  agentId: "<id>",
  agentExecutionId: "<id>",
  workspaceId: "<id>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `messageId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `role`                                                                                 | [operations.StreamRunAgentDataRole](../../models/operations/streamrunagentdatarole.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `parts`                                                                                | *operations.StreamRunAgentDataParts*[]                                                 | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `metadata`                                                                             | Record<string, *any*>                                                                  | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `agentId`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `agentExecutionId`                                                                     | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `workspaceId`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |