# AgentToolInputCRUDDeleteMemoryDocumentTool

Deletes documents from memory stores

## Example Usage

```typescript
import { AgentToolInputCRUDDeleteMemoryDocumentTool } from "@orq-ai/node/models/operations";

let value: AgentToolInputCRUDDeleteMemoryDocumentTool = {
  type: "delete_memory_document",
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                   | [operations.UpdateAgentAgentToolInputCRUDAgentsRequestRequestBodySettingsTools8Type](../../models/operations/updateagentagenttoolinputcrudagentsrequestrequestbodysettingstools8type.md) | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `requiresApproval`                                                                                                                                                                       | *boolean*                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                       | Whether this tool requires approval before execution                                                                                                                                     |