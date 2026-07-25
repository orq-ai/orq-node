# SidekickTool

Delegate a subtask to a secondary model for execution

## Example Usage

```typescript
import { SidekickTool } from "@orq-ai/node/models/components";

let value: SidekickTool = {
  type: "sidekick",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `type`                                                                                              | [components.AgentToolInputCrud13Type](../../models/components/agenttoolinputcrud13type.md)          | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `requiresApproval`                                                                                  | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Whether this tool requires approval before execution                                                |
| `configuration`                                                                                     | Record<string, *any*>                                                                               | :heavy_minus_sign:                                                                                  | Static tool configuration set at design time. Merged over LLM-provided arguments at execution time. |