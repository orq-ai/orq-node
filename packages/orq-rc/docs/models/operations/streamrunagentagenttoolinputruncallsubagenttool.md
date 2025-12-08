# StreamRunAgentAgentToolInputRunCallSubAgentTool

Delegates tasks to specialized sub-agents

## Example Usage

```typescript
import { StreamRunAgentAgentToolInputRunCallSubAgentTool } from "@orq-ai/node/models/operations";

let value: StreamRunAgentAgentToolInputRunCallSubAgentTool = {
  type: "call_sub_agent",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | *"call_sub_agent"*                                   | :heavy_check_mark:                                   | N/A                                                  |
| `requiresApproval`                                   | *boolean*                                            | :heavy_minus_sign:                                   | Whether this tool requires approval before execution |