# AgentToolInputRunCurrentDateTool

Returns the current date and time

## Example Usage

```typescript
import { AgentToolInputRunCurrentDateTool } from "@orq-ai/node/models/operations";

let value: AgentToolInputRunCurrentDateTool = {
  type: "current_date",
};
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                             | [operations.RunAgentAgentToolInputRunAgentsRequestRequestBodySettingsTools11Type](../../models/operations/runagentagenttoolinputrunagentsrequestrequestbodysettingstools11type.md) | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |
| `requiresApproval`                                                                                                                                                                 | *boolean*                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                 | Whether this tool requires approval before execution                                                                                                                               |