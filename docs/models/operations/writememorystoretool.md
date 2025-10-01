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

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                   | [operations.RunAgentRunAgentRequestToolAgentsRequestRequestBodySettingsType](../../models/operations/runagentrunagentrequesttoolagentsrequestrequestbodysettingstype.md) | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `requiresApproval`                                                                                                                                                       | *boolean*                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |