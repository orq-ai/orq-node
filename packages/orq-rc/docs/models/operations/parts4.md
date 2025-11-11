# Parts4

## Example Usage

```typescript
import { Parts4 } from "@orq-ai/node/models/operations";

let value: Parts4 = {
  kind: "tool_call",
  toolName: "<value>",
  toolCallId: "<id>",
  arguments: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                           | [operations.GetAgentTaskPartsAgentsResponseKind](../../models/operations/getagenttaskpartsagentsresponsekind.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `toolName`                                                                                                       | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `toolCallId`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `arguments`                                                                                                      | Record<string, *any*>                                                                                            | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `metadata`                                                                                                       | Record<string, *any*>                                                                                            | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |