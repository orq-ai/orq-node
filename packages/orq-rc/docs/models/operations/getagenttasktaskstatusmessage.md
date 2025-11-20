# GetAgentTaskTaskStatusMessage

Optional A2A message providing additional context about the current status

## Example Usage

```typescript
import { GetAgentTaskTaskStatusMessage } from "@orq-ai/node/models/operations";

let value: GetAgentTaskTaskStatusMessage = {
  kind: "message",
  messageId: "<id>",
  role: "user",
  parts: [
    {
      kind: "text",
      text: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                                                                         | [operations.GetAgentTaskAgentsResponseKind](../../models/operations/getagenttaskagentsresponsekind.md)                                                         | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `messageId`                                                                                                                                                    | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `role`                                                                                                                                                         | [operations.GetAgentTaskExtendedMessageRole](../../models/operations/getagenttaskextendedmessagerole.md)                                                       | :heavy_check_mark:                                                                                                                                             | Role of the message sender in the A2A protocol. Values: user (end user), agent (AI agent), tool (tool execution result), system (system instructions/prompts). |
| `parts`                                                                                                                                                        | *operations.GetAgentTaskAgentsParts*[]                                                                                                                         | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |