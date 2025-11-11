# ListAgentTasksParts3

## Example Usage

```typescript
import { ListAgentTasksParts3 } from "@orq-ai/node/models/operations";

let value: ListAgentTasksParts3 = {
  kind: "file",
  file: {
    bytes: "<value>",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                               | [operations.ListAgentTasksPartsAgentsResponseKind](../../models/operations/listagenttaskspartsagentsresponsekind.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `file`                                                                                                               | *operations.ListAgentTasksPartsFile*                                                                                 | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `metadata`                                                                                                           | Record<string, *any*>                                                                                                | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |