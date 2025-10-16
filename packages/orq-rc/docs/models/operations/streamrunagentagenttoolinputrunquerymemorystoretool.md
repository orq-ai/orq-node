# StreamRunAgentAgentToolInputRunQueryMemoryStoreTool

Queries agent memory stores for context

## Example Usage

```typescript
import { StreamRunAgentAgentToolInputRunQueryMemoryStoreTool } from "@orq-ai/node/models/operations";

let value: StreamRunAgentAgentToolInputRunQueryMemoryStoreTool = {
  type: "query_memory_store",
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                           | [operations.StreamRunAgentAgentToolInputRunAgentsRequestRequestBodySettingsType](../../models/operations/streamrunagentagenttoolinputrunagentsrequestrequestbodysettingstype.md) | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |
| `requiresApproval`                                                                                                                                                               | *boolean*                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                               | Whether this tool requires approval before execution                                                                                                                             |