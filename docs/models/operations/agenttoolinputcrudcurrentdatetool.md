# AgentToolInputCRUDCurrentDateTool

Returns the current date and time

## Example Usage

```typescript
import { AgentToolInputCRUDCurrentDateTool } from "@orq-ai/node/models/operations";

let value: AgentToolInputCRUDCurrentDateTool = {
  type: "current_date",
};
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                     | [operations.UpdateAgentAgentToolInputCRUDAgentsRequestRequestBodySettingsTools11Type](../../models/operations/updateagentagenttoolinputcrudagentsrequestrequestbodysettingstools11type.md) | :heavy_check_mark:                                                                                                                                                                         | N/A                                                                                                                                                                                        |
| `requiresApproval`                                                                                                                                                                         | *boolean*                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                         | Whether this tool requires approval before execution                                                                                                                                       |