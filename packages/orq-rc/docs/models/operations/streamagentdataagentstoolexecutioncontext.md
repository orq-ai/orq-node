# StreamAgentDataAgentsToolExecutionContext

## Example Usage

```typescript
import { StreamAgentDataAgentsToolExecutionContext } from "@orq-ai/node/models/operations";

let value: StreamAgentDataAgentsToolExecutionContext = {
  actionId: "<id>",
  agentToolCallId: "<id>",
  workspaceId: "<id>",
  agentManifestId: "<id>",
  agentExecutionId: "<id>",
  product: "playgrounds",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `actionId`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `agentToolCallId`                                                                                  | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `workspaceId`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `agentManifestId`                                                                                  | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `agentExecutionId`                                                                                 | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `product`                                                                                          | [operations.StreamAgentDataAgentsProduct](../../models/operations/streamagentdataagentsproduct.md) | :heavy_check_mark:                                                                                 | Orquesta product                                                                                   |
| `memory`                                                                                           | [operations.StreamAgentDataAgentsMemory](../../models/operations/streamagentdataagentsmemory.md)   | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `parentId`                                                                                         | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |