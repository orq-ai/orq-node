# RetrieveMemoryStoresTool

Lists available memory stores

## Example Usage

```typescript
import { RetrieveMemoryStoresTool } from "@orq-ai/node/models/components";

let value: RetrieveMemoryStoresTool = {
  type: "retrieve_memory_stores",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `type`                                                                                              | [components.AgentToolInputCrud7Type](../../models/components/agenttoolinputcrud7type.md)            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `requiresApproval`                                                                                  | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Whether this tool requires approval before execution                                                |
| `configuration`                                                                                     | Record<string, *any*>                                                                               | :heavy_minus_sign:                                                                                  | Static tool configuration set at design time. Merged over LLM-provided arguments at execution time. |