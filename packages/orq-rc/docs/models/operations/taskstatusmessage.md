# TaskStatusMessage

Optional A2A message providing additional context about the current status

## Example Usage

```typescript
import { TaskStatusMessage } from "@orq-ai/node/models/operations";

let value: TaskStatusMessage = {
  kind: "message",
  messageId: "<id>",
  role: "system",
  parts: [],
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                                                                         | [operations.InvokeAgentAgentsKind](../../models/operations/invokeagentagentskind.md)                                                                           | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `messageId`                                                                                                                                                    | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `role`                                                                                                                                                         | [operations.InvokeAgentExtendedMessageRole](../../models/operations/invokeagentextendedmessagerole.md)                                                         | :heavy_check_mark:                                                                                                                                             | Role of the message sender in the A2A protocol. Values: user (end user), agent (AI agent), tool (tool execution result), system (system instructions/prompts). |
| `parts`                                                                                                                                                        | *operations.InvokeAgentParts*[]                                                                                                                                | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |