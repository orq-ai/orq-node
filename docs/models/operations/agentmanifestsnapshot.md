# AgentManifestSnapshot

## Example Usage

```typescript
import { AgentManifestSnapshot } from "@orq-ai/node/models/operations";

let value: AgentManifestSnapshot = {
  id: "<id>",
  key: "<key>",
  role: "<value>",
  description: "kick negative insignificant but oof contrast",
  instructions: "<value>",
  model: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `key`                                                                                  | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `role`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `description`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `instructions`                                                                         | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `systemPrompt`                                                                         | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `model`                                                                                | [operations.ListAgentTasksModel](../../models/operations/listagenttasksmodel.md)       | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `settings`                                                                             | [operations.ListAgentTasksSettings](../../models/operations/listagenttaskssettings.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `projectId`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |