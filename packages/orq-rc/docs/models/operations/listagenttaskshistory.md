# ListAgentTasksHistory

## Example Usage

```typescript
import { ListAgentTasksHistory } from "@orq-ai/node/models/operations";

let value: ListAgentTasksHistory = {
  kind: "message",
  messageId: "<id>",
  role: "agent",
  parts: [],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `kind`                                                                                     | [operations.ListAgentTasksAgentsKind](../../models/operations/listagenttasksagentskind.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `messageId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `role`                                                                                     | [operations.ListAgentTasksRole](../../models/operations/listagenttasksrole.md)             | :heavy_check_mark:                                                                         | Extended A2A message role                                                                  |
| `parts`                                                                                    | *operations.ListAgentTasksParts*[]                                                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `taskId`                                                                                   | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `contextId`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `metadata`                                                                                 | Record<string, *any*>                                                                      | :heavy_minus_sign:                                                                         | N/A                                                                                        |