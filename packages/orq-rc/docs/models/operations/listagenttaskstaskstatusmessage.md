# ListAgentTasksTaskStatusMessage

Optional A2A message providing additional context about the current status

## Example Usage

```typescript
import { ListAgentTasksTaskStatusMessage } from "@orq-ai/node/models/operations";

let value: ListAgentTasksTaskStatusMessage = {
  kind: "message",
  messageId: "<id>",
  role: "user",
  parts: [
    {
      kind: "data",
      data: {},
    },
  ],
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                                                                         | [operations.ListAgentTasksAgentsResponseKind](../../models/operations/listagenttasksagentsresponsekind.md)                                                     | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `messageId`                                                                                                                                                    | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `role`                                                                                                                                                         | [operations.ListAgentTasksAgentsExtendedMessageRole](../../models/operations/listagenttasksagentsextendedmessagerole.md)                                       | :heavy_check_mark:                                                                                                                                             | Role of the message sender in the A2A protocol. Values: user (end user), agent (AI agent), tool (tool execution result), system (system instructions/prompts). |
| `parts`                                                                                                                                                        | *operations.ListAgentTasksAgentsResponseParts*[]                                                                                                               | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |