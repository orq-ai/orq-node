# AgentToolInputCRUDWriteMemoryStoreTool

Writes information to agent memory stores

## Example Usage

```typescript
import { AgentToolInputCRUDWriteMemoryStoreTool } from "@orq-ai/node/models/operations";

let value: AgentToolInputCRUDWriteMemoryStoreTool = {
  type: "write_memory_store",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | *"write_memory_store"*                               | :heavy_check_mark:                                   | N/A                                                  |
| `requiresApproval`                                   | *boolean*                                            | :heavy_minus_sign:                                   | Whether this tool requires approval before execution |