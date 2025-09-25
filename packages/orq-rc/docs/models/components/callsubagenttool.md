# CallSubAgentTool

Delegates tasks to specialized sub-agents

## Example Usage

```typescript
import { CallSubAgentTool } from "@orq-ai/node/models/components";

let value: CallSubAgentTool = {
  type: "call_sub_agent",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | [components.CallSubAgentToolType](../../models/components/callsubagenttooltype.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `requiresApproval`                                                                 | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |