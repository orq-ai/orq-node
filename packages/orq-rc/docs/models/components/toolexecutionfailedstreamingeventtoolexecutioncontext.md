# ToolExecutionFailedStreamingEventToolExecutionContext

## Example Usage

```typescript
import { ToolExecutionFailedStreamingEventToolExecutionContext } from "@orq-ai/node/models/components";

let value: ToolExecutionFailedStreamingEventToolExecutionContext = {
  actionId: "<id>",
  agentToolCallId: "<id>",
  workspaceId: "<id>",
  agentManifestId: "<id>",
  agentExecutionId: "<id>",
  product: "spreadsheet_run",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `actionId`                                                                                                                 | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `agentToolCallId`                                                                                                          | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `workspaceId`                                                                                                              | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `agentManifestId`                                                                                                          | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `agentExecutionId`                                                                                                         | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `product`                                                                                                                  | [components.ToolExecutionFailedStreamingEventProduct](../../models/components/toolexecutionfailedstreamingeventproduct.md) | :heavy_check_mark:                                                                                                         | Orquesta product                                                                                                           |
| `memory`                                                                                                                   | [components.ToolExecutionFailedStreamingEventMemory](../../models/components/toolexecutionfailedstreamingeventmemory.md)   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `parentId`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |