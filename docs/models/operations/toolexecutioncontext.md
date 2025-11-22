# ToolExecutionContext

## Example Usage

```typescript
import { ToolExecutionContext } from "@orq-ai/node/models/operations";

let value: ToolExecutionContext = {
  actionId: "<id>",
  agentToolCallId: "<id>",
  workspaceId: "<id>",
  agentManifestId: "<id>",
  agentExecutionId: "<id>",
  product: "router",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `actionId`                                                     | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `agentToolCallId`                                              | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `workspaceId`                                                  | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `agentManifestId`                                              | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `agentExecutionId`                                             | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `product`                                                      | [operations.Product](../../models/operations/product.md)       | :heavy_check_mark:                                             | Orquesta product                                               |
| `memory`                                                       | [operations.DataMemory](../../models/operations/datamemory.md) | :heavy_minus_sign:                                             | N/A                                                            |
| `parentId`                                                     | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |