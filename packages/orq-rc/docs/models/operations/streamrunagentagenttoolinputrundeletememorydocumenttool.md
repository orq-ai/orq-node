# StreamRunAgentAgentToolInputRunDeleteMemoryDocumentTool

Deletes documents from memory stores

## Example Usage

```typescript
import { StreamRunAgentAgentToolInputRunDeleteMemoryDocumentTool } from "@orq-ai/node/models/operations";

let value: StreamRunAgentAgentToolInputRunDeleteMemoryDocumentTool = {
  type: "delete_memory_document",
};
```

## Fields

| Field                                                                                                                                                                                        | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                       | [operations.StreamRunAgentAgentToolInputRunAgentsRequestRequestBodySettingsTools8Type](../../models/operations/streamrunagentagenttoolinputrunagentsrequestrequestbodysettingstools8type.md) | :heavy_check_mark:                                                                                                                                                                           | N/A                                                                                                                                                                                          |
| `requiresApproval`                                                                                                                                                                           | *boolean*                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                           | Whether this tool requires approval before execution                                                                                                                                         |