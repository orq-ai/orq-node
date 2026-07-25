# AdvisorTool

Consult a secondary model for advice on the current task

## Example Usage

```typescript
import { AdvisorTool } from "@orq-ai/node/models/operations";

let value: AdvisorTool = {
  type: "advisor",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `type`                                                                                              | *"advisor"*                                                                                         | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `requiresApproval`                                                                                  | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Whether this tool requires approval before execution                                                |
| `configuration`                                                                                     | Record<string, *any*>                                                                               | :heavy_minus_sign:                                                                                  | Static tool configuration set at design time. Merged over LLM-provided arguments at execution time. |