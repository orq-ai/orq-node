# GetAgentTaskExtendedTaskResponse

Agent task execution response format with full conversation history and artifacts. Used for API responses when retrieving task details.

## Example Usage

```typescript
import { GetAgentTaskExtendedTaskResponse } from "@orq-ai/node/models/operations";

let value: GetAgentTaskExtendedTaskResponse = {
  id: "<id>",
  contextId: "<id>",
  kind: "task",
  status: {
    state: "canceled",
  },
  history: [
    {
      kind: "message",
      messageId: "<id>",
      role: "agent",
      parts: [],
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | Unique task execution identifier                                                       |
| `contextId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | Correlation ID for tracking                                                            |
| `kind`                                                                                 | [operations.GetAgentTaskKind](../../models/operations/getagenttaskkind.md)             | :heavy_check_mark:                                                                     | A2A entity type                                                                        |
| `status`                                                                               | [operations.GetAgentTaskTaskStatus](../../models/operations/getagenttasktaskstatus.md) | :heavy_check_mark:                                                                     | Current task execution status                                                          |
| `history`                                                                              | [operations.ExtendedA2AMessage](../../models/operations/extendeda2amessage.md)[]       | :heavy_check_mark:                                                                     | Conversation history with all messages exchanged                                       |
| `artifacts`                                                                            | [operations.TaskArtifact](../../models/operations/taskartifact.md)[]                   | :heavy_minus_sign:                                                                     | Optional files or data produced during execution                                       |
| `metadata`                                                                             | Record<string, *any*>                                                                  | :heavy_minus_sign:                                                                     | Additional task metadata                                                               |