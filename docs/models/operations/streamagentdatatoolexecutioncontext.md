# StreamAgentDataToolExecutionContext

## Example Usage

```typescript
import { StreamAgentDataToolExecutionContext } from "@orq-ai/node/models/operations";

let value: StreamAgentDataToolExecutionContext = {
  actionId: "<id>",
  agentToolCallId: "<id>",
  workspaceId: "<id>",
  agentManifestId: "<id>",
  agentExecutionId: "<id>",
  product: "llm_evaluator",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `actionId`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `agentToolCallId`                                                                      | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `workspaceId`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `agentManifestId`                                                                      | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `agentExecutionId`                                                                     | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `product`                                                                              | [operations.StreamAgentDataProduct](../../models/operations/streamagentdataproduct.md) | :heavy_check_mark:                                                                     | Orquesta product                                                                       |
| `memory`                                                                               | [operations.StreamAgentDataMemory](../../models/operations/streamagentdatamemory.md)   | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `parentId`                                                                             | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |