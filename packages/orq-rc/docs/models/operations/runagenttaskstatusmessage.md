# RunAgentTaskStatusMessage

Optional A2A message providing additional context about the current status

## Example Usage

```typescript
import { RunAgentTaskStatusMessage } from "@orq-ai/node/models/operations";

let value: RunAgentTaskStatusMessage = {
  kind: "message",
  messageId: "<id>",
  role: "system",
  parts: [
    {
      kind: "file",
      file: {
        bytes: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                                                                         | [operations.RunAgentAgentsKind](../../models/operations/runagentagentskind.md)                                                                                 | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `messageId`                                                                                                                                                    | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `role`                                                                                                                                                         | [operations.RunAgentExtendedMessageRole](../../models/operations/runagentextendedmessagerole.md)                                                               | :heavy_check_mark:                                                                                                                                             | Role of the message sender in the A2A protocol. Values: user (end user), agent (AI agent), tool (tool execution result), system (system instructions/prompts). |
| `parts`                                                                                                                                                        | *operations.RunAgentParts*[]                                                                                                                                   | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |