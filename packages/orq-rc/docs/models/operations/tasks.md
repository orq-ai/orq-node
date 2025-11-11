# Tasks

## Example Usage

```typescript
import { Tasks } from "@orq-ai/node/models/operations";

let value: Tasks = {
  id: "<id>",
  contextId: "<id>",
  kind: "task",
  status: {
    state: "Louisiana",
  },
  history: [
    {
      kind: "message",
      messageId: "<id>",
      role: "user",
      parts: [],
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `contextId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `kind`                                                                                     | [operations.ListAgentTasksKind](../../models/operations/listagenttaskskind.md)             | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `status`                                                                                   | [operations.ListAgentTasksStatus](../../models/operations/listagenttasksstatus.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `history`                                                                                  | [operations.ListAgentTasksHistory](../../models/operations/listagenttaskshistory.md)[]     | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `artifacts`                                                                                | [operations.ListAgentTasksArtifacts](../../models/operations/listagenttasksartifacts.md)[] | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `metadata`                                                                                 | Record<string, *any*>                                                                      | :heavy_minus_sign:                                                                         | N/A                                                                                        |