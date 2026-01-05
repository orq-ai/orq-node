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
| `kind`                                                                                                                                                         | [operations.InvokeAgentKind](../../models/operations/invokeagentkind.md)                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `messageId`                                                                                                                                                    | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `role`                                                                                                                                                         | [operations.ExtendedMessageRole](../../models/operations/extendedmessagerole.md)                                                                               | :heavy_check_mark:                                                                                                                                             | Role of the message sender in the A2A protocol. Values: user (end user), agent (AI agent), tool (tool execution result), system (system instructions/prompts). |
| `parts`                                                                                                                                                        | *operations.Parts*[]                                                                                                                                           | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |