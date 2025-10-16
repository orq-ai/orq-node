# AgentToolInputRunWriteMemoryStoreTool

Writes information to agent memory stores

## Example Usage

```typescript
import { AgentToolInputRunWriteMemoryStoreTool } from "@orq-ai/node/models/operations";

let value: AgentToolInputRunWriteMemoryStoreTool = {
  type: "write_memory_store",
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                               | [operations.RunAgentAgentToolInputRunAgentsRequestRequestBodySettingsType](../../models/operations/runagentagenttoolinputrunagentsrequestrequestbodysettingstype.md) | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `requiresApproval`                                                                                                                                                   | *boolean*                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                   | Whether this tool requires approval before execution                                                                                                                 |