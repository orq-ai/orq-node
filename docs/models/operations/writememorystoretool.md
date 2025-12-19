# WriteMemoryStoreTool

Writes information to agent memory stores

## Example Usage

```typescript
import { WriteMemoryStoreTool } from "@orq-ai/node/models/operations";

let value: WriteMemoryStoreTool = {
  type: "write_memory_store",
};
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                     | [operations.CreateAgentRequestAgentToolInputCRUDAgentsRequestRequestBodySettingsType](../../models/operations/createagentrequestagenttoolinputcrudagentsrequestrequestbodysettingstype.md) | :heavy_check_mark:                                                                                                                                                                         | N/A                                                                                                                                                                                        |
| `requiresApproval`                                                                                                                                                                         | *boolean*                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                         | Whether this tool requires approval before execution                                                                                                                                       |