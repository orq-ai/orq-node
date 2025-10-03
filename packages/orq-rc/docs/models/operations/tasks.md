# Tasks

## Example Usage

```typescript
import { Tasks } from "@orq-ai/node/models/operations";

let value: Tasks = {
  id: "<id>",
  agentManifestSnapshot: {
    id: "<id>",
    key: "<key>",
    role: "<value>",
    description: "likewise duh ew deadly instead",
    instructions: "<value>",
    model: {
      id: "<id>",
    },
  },
  workspaceId: "<id>",
  state: {},
  metrics: {},
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `agentManifestSnapshot`                                                              | [operations.AgentManifestSnapshot](../../models/operations/agentmanifestsnapshot.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `createdById`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `updatedById`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `created`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `updated`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `name`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `workspaceId`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `memory`                                                                             | [operations.ListAgentTasksMemory](../../models/operations/listagenttasksmemory.md)   | :heavy_minus_sign:                                                                   | Memory configuration for this execution                                              |
| `metadata`                                                                           | Record<string, *any*>                                                                | :heavy_minus_sign:                                                                   | Execution-level metadata as key-value pairs                                          |
| `state`                                                                              | [operations.ListAgentTasksState](../../models/operations/listagenttasksstate.md)     | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `metrics`                                                                            | [operations.ListAgentTasksMetrics](../../models/operations/listagenttasksmetrics.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |