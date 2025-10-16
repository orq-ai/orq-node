# DeleteMemoryDocumentTool

Deletes documents from memory stores

## Example Usage

```typescript
import { DeleteMemoryDocumentTool } from "@orq-ai/node/models/operations";

let value: DeleteMemoryDocumentTool = {
  type: "delete_memory_document",
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                   | [operations.CreateAgentAgentToolInputCRUDAgentsRequestRequestBodySettingsTools8Type](../../models/operations/createagentagenttoolinputcrudagentsrequestrequestbodysettingstools8type.md) | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `requiresApproval`                                                                                                                                                                       | *boolean*                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                       | Whether this tool requires approval before execution                                                                                                                                     |