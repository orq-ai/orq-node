# StreamAgentDataAgentsResponseToolExecutionContext

## Example Usage

```typescript
import { StreamAgentDataAgentsResponseToolExecutionContext } from "@orq-ai/node/models/operations";

let value: StreamAgentDataAgentsResponseToolExecutionContext = {
  actionId: "<id>",
  agentToolCallId: "<id>",
  workspaceId: "<id>",
  agentManifestId: "<id>",
  agentExecutionId: "<id>",
  product: "otel",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `actionId`                                                                                                         | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `agentToolCallId`                                                                                                  | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `workspaceId`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `agentManifestId`                                                                                                  | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `agentExecutionId`                                                                                                 | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `product`                                                                                                          | [operations.StreamAgentDataAgentsResponseProduct](../../models/operations/streamagentdataagentsresponseproduct.md) | :heavy_check_mark:                                                                                                 | Orquesta product                                                                                                   |
| `memory`                                                                                                           | [operations.StreamAgentDataAgentsResponseMemory](../../models/operations/streamagentdataagentsresponsememory.md)   | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `parentId`                                                                                                         | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |