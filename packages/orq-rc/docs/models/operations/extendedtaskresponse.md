# ExtendedTaskResponse

Agent task execution response format with full conversation history and artifacts. Used for API responses when retrieving task details.

## Example Usage

```typescript
import { ExtendedTaskResponse } from "@orq-ai/node/models/operations";

let value: ExtendedTaskResponse = {
  id: "<id>",
  contextId: "<id>",
  kind: "task",
  status: {
    state: "submitted",
  },
  history: [
    {
      kind: "message",
      messageId: "<id>",
      role: "agent",
      parts: [
        {
          kind: "file",
          file: {
            bytes: "<value>",
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Unique task execution identifier                                                                             |
| `contextId`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Correlation ID for tracking                                                                                  |
| `kind`                                                                                                       | [operations.ListAgentTasksKind](../../models/operations/listagenttaskskind.md)                               | :heavy_check_mark:                                                                                           | A2A entity type                                                                                              |
| `status`                                                                                                     | [operations.ListAgentTasksTaskStatus](../../models/operations/listagenttaskstaskstatus.md)                   | :heavy_check_mark:                                                                                           | Current task execution status                                                                                |
| `history`                                                                                                    | [operations.ListAgentTasksExtendedA2AMessage](../../models/operations/listagenttasksextendeda2amessage.md)[] | :heavy_check_mark:                                                                                           | Conversation history with all messages exchanged                                                             |
| `artifacts`                                                                                                  | [operations.ListAgentTasksTaskArtifact](../../models/operations/listagenttaskstaskartifact.md)[]             | :heavy_minus_sign:                                                                                           | Optional files or data produced during execution                                                             |
| `metadata`                                                                                                   | Record<string, *any*>                                                                                        | :heavy_minus_sign:                                                                                           | Additional task metadata                                                                                     |