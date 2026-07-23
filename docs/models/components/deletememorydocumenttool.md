# DeleteMemoryDocumentTool

Deletes documents from memory stores

## Example Usage

```typescript
import { DeleteMemoryDocumentTool } from "@orq-ai/node/models/components";

let value: DeleteMemoryDocumentTool = {
  type: "delete_memory_document",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `type`                                                                                              | [components.AgentToolInputCrud8Type](../../models/components/agenttoolinputcrud8type.md)            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `requiresApproval`                                                                                  | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Whether this tool requires approval before execution                                                |
| `configuration`                                                                                     | Record<string, *any*>                                                                               | :heavy_minus_sign:                                                                                  | Static tool configuration set at design time. Merged over LLM-provided arguments at execution time. |