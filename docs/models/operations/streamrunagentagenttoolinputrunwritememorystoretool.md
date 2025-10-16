# StreamRunAgentAgentToolInputRunWriteMemoryStoreTool

Writes information to agent memory stores

## Example Usage

```typescript
import { StreamRunAgentAgentToolInputRunWriteMemoryStoreTool } from "@orq-ai/node/models/operations";

let value: StreamRunAgentAgentToolInputRunWriteMemoryStoreTool = {
  type: "write_memory_store",
};
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                     | [operations.StreamRunAgentAgentToolInputRunAgentsRequestRequestBodySettingsToolsType](../../models/operations/streamrunagentagenttoolinputrunagentsrequestrequestbodysettingstoolstype.md) | :heavy_check_mark:                                                                                                                                                                         | N/A                                                                                                                                                                                        |
| `requiresApproval`                                                                                                                                                                         | *boolean*                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                         | Whether this tool requires approval before execution                                                                                                                                       |