# StreamRunAgentAgentToolInputRunRetrieveMemoryStoresTool

Lists available memory stores

## Example Usage

```typescript
import { StreamRunAgentAgentToolInputRunRetrieveMemoryStoresTool } from "@orq-ai/node/models/operations";

let value: StreamRunAgentAgentToolInputRunRetrieveMemoryStoresTool = {
  type: "retrieve_memory_stores",
};
```

## Fields

| Field                                                                                                                                                                                        | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                       | [operations.StreamRunAgentAgentToolInputRunAgentsRequestRequestBodySettingsTools7Type](../../models/operations/streamrunagentagenttoolinputrunagentsrequestrequestbodysettingstools7type.md) | :heavy_check_mark:                                                                                                                                                                           | N/A                                                                                                                                                                                          |
| `requiresApproval`                                                                                                                                                                           | *boolean*                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                           | Whether this tool requires approval before execution                                                                                                                                         |