# DataMessageDifference

## Example Usage

```typescript
import { DataMessageDifference } from "@orq-ai/node/models/operations";

let value: DataMessageDifference = {
  messageId: "<id>",
  role: "user",
  parts: [
    {
      kind: "tool_call",
      toolName: "<value>",
      toolCallId: "<id>",
      arguments: {},
    },
  ],
  agentId: "<id>",
  agentExecutionId: "<id>",
  workspaceId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `messageId`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `role`                                                                                       | [operations.StreamAgentDataAgentsRole](../../models/operations/streamagentdataagentsrole.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `parts`                                                                                      | *operations.StreamAgentDataAgentsParts*[]                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `metadata`                                                                                   | Record<string, *any*>                                                                        | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `agentId`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `agentExecutionId`                                                                           | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `workspaceId`                                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |