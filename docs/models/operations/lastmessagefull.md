# LastMessageFull

Full last message in A2A format (for backwards compatibility)

## Example Usage

```typescript
import { LastMessageFull } from "@orq-ai/node/models/operations";

let value: LastMessageFull = {
  role: "system",
  parts: [],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `messageId`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `role`                                                                                             | [operations.StreamRunAgentDataAgentsRole](../../models/operations/streamrunagentdataagentsrole.md) | :heavy_check_mark:                                                                                 | Extended A2A message role                                                                          |
| `parts`                                                                                            | *operations.StreamRunAgentDataAgentsParts*[]                                                       | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `metadata`                                                                                         | Record<string, *any*>                                                                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |