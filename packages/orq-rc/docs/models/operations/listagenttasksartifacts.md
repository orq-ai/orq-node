# ListAgentTasksArtifacts

## Example Usage

```typescript
import { ListAgentTasksArtifacts } from "@orq-ai/node/models/operations";

let value: ListAgentTasksArtifacts = {
  kind: "artifact",
  artifactId: "<id>",
  name: "<value>",
  type: "<value>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                     | [operations.ListAgentTasksAgentsResponseKind](../../models/operations/listagenttasksagentsresponsekind.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `artifactId`                                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `type`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `url`                                                                                                      | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `data`                                                                                                     | *any*                                                                                                      | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |