# DataLastMessageFull

Full last message in A2A format (for backwards compatibility)

## Example Usage

```typescript
import { DataLastMessageFull } from "@orq-ai/node/models/operations";

let value: DataLastMessageFull = {
  role: "tool",
  parts: [
    {
      kind: "tool_result",
      toolCallId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `messageId`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `role`                                                                                                       | [operations.StreamAgentDataAgentsResponseRole](../../models/operations/streamagentdataagentsresponserole.md) | :heavy_check_mark:                                                                                           | Extended A2A message role                                                                                    |
| `parts`                                                                                                      | *operations.StreamAgentDataAgentsResponseParts*[]                                                            | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `metadata`                                                                                                   | Record<string, *any*>                                                                                        | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |