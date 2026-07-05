# AgentToolInputCRUDQueryMemoryStoreTool

Queries agent memory stores for context

## Example Usage

```typescript
import { AgentToolInputCRUDQueryMemoryStoreTool } from "@orq-ai/node/models/operations";

let value: AgentToolInputCRUDQueryMemoryStoreTool = {
  type: "query_memory_store",
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                       | [operations.UpdateAgentAgentToolInputCRUDAgentsRequestRequestBodySettingsType](../../models/operations/updateagentagenttoolinputcrudagentsrequestrequestbodysettingstype.md) | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `requiresApproval`                                                                                                                                                           | *boolean*                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                           | Whether this tool requires approval before execution                                                                                                                         |
| `configuration`                                                                                                                                                              | Record<string, *any*>                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                           | Static tool configuration set at design time. Merged over LLM-provided arguments at execution time.                                                                          |