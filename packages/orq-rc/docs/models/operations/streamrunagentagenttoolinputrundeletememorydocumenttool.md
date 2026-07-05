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

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `type`                                                                                              | *"delete_memory_document"*                                                                          | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `requiresApproval`                                                                                  | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Whether this tool requires approval before execution                                                |
| `configuration`                                                                                     | Record<string, *any*>                                                                               | :heavy_minus_sign:                                                                                  | Static tool configuration set at design time. Merged over LLM-provided arguments at execution time. |