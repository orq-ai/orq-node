# ListAgentTasksParts4

## Example Usage

```typescript
import { ListAgentTasksParts4 } from "@orq-ai/node/models/operations";

let value: ListAgentTasksParts4 = {
  kind: "tool_call",
  toolName: "<value>",
  toolCallId: "<id>",
  arguments: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                                     | [operations.ListAgentTasksPartsAgentsResponse200Kind](../../models/operations/listagenttaskspartsagentsresponse200kind.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `toolName`                                                                                                                 | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `toolCallId`                                                                                                               | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `arguments`                                                                                                                | Record<string, *any*>                                                                                                      | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `metadata`                                                                                                                 | Record<string, *any*>                                                                                                      | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |