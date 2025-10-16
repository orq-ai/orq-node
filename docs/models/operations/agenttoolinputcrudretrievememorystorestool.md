# AgentToolInputCRUDRetrieveMemoryStoresTool

Lists available memory stores

## Example Usage

```typescript
import { AgentToolInputCRUDRetrieveMemoryStoresTool } from "@orq-ai/node/models/operations";

let value: AgentToolInputCRUDRetrieveMemoryStoresTool = {
  type: "retrieve_memory_stores",
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                   | [operations.UpdateAgentAgentToolInputCRUDAgentsRequestRequestBodySettingsTools7Type](../../models/operations/updateagentagenttoolinputcrudagentsrequestrequestbodysettingstools7type.md) | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `requiresApproval`                                                                                                                                                                       | *boolean*                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                       | Whether this tool requires approval before execution                                                                                                                                     |