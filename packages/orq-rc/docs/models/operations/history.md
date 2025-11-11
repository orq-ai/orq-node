# History

## Example Usage

```typescript
import { History } from "@orq-ai/node/models/operations";

let value: History = {
  kind: "message",
  messageId: "<id>",
  role: "agent",
  parts: [
    {
      kind: "tool_call",
      toolName: "<value>",
      toolCallId: "<id>",
      arguments: {
        "key": "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `kind`                                                                                                 | [operations.GetAgentTaskAgentsResponseKind](../../models/operations/getagenttaskagentsresponsekind.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `messageId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `role`                                                                                                 | [operations.GetAgentTaskRole](../../models/operations/getagenttaskrole.md)                             | :heavy_check_mark:                                                                                     | Extended A2A message role                                                                              |
| `parts`                                                                                                | *operations.Parts*[]                                                                                   | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `taskId`                                                                                               | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `contextId`                                                                                            | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `metadata`                                                                                             | Record<string, *any*>                                                                                  | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |