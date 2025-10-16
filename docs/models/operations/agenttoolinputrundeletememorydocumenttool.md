# AgentToolInputRunDeleteMemoryDocumentTool

Deletes documents from memory stores

## Example Usage

```typescript
import { AgentToolInputRunDeleteMemoryDocumentTool } from "@orq-ai/node/models/operations";

let value: AgentToolInputRunDeleteMemoryDocumentTool = {
  type: "delete_memory_document",
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                           | [operations.RunAgentAgentToolInputRunAgentsRequestRequestBodySettingsTools8Type](../../models/operations/runagentagenttoolinputrunagentsrequestrequestbodysettingstools8type.md) | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |
| `requiresApproval`                                                                                                                                                               | *boolean*                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                               | Whether this tool requires approval before execution                                                                                                                             |