# WriteMemoryStoreTool

Writes information to agent memory stores

## Example Usage

```typescript
import { WriteMemoryStoreTool } from "@orq-ai/node/models/components";

let value: WriteMemoryStoreTool = {
  type: "write_memory_store",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `type`                                                                                              | [components.AgentToolInputCrud6Type](../../models/components/agenttoolinputcrud6type.md)            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `requiresApproval`                                                                                  | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Whether this tool requires approval before execution                                                |
| `configuration`                                                                                     | Record<string, *any*>                                                                               | :heavy_minus_sign:                                                                                  | Static tool configuration set at design time. Merged over LLM-provided arguments at execution time. |