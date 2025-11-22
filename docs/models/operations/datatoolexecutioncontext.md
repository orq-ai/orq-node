# DataToolExecutionContext

## Example Usage

```typescript
import { DataToolExecutionContext } from "@orq-ai/node/models/operations";

let value: DataToolExecutionContext = {
  actionId: "<id>",
  agentToolCallId: "<id>",
  workspaceId: "<id>",
  agentManifestId: "<id>",
  agentExecutionId: "<id>",
  product: "spreadsheets",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `actionId`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `agentToolCallId`                                                                          | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `workspaceId`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `agentManifestId`                                                                          | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `agentExecutionId`                                                                         | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `product`                                                                                  | [operations.DataProduct](../../models/operations/dataproduct.md)                           | :heavy_check_mark:                                                                         | Orquesta product                                                                           |
| `memory`                                                                                   | [operations.StreamRunAgentDataMemory](../../models/operations/streamrunagentdatamemory.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `parentId`                                                                                 | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |