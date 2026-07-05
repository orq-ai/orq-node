# StreamRunAgentAgentToolInputRunCurrentDateTool

Returns the current date and time

## Example Usage

```typescript
import { StreamRunAgentAgentToolInputRunCurrentDateTool } from "@orq-ai/node/models/operations";

let value: StreamRunAgentAgentToolInputRunCurrentDateTool = {
  type: "current_date",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `type`                                                                                              | *"current_date"*                                                                                    | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `requiresApproval`                                                                                  | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Whether this tool requires approval before execution                                                |
| `configuration`                                                                                     | Record<string, *any*>                                                                               | :heavy_minus_sign:                                                                                  | Static tool configuration set at design time. Merged over LLM-provided arguments at execution time. |