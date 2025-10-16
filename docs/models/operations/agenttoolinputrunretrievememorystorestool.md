# AgentToolInputRunRetrieveMemoryStoresTool

Lists available memory stores

## Example Usage

```typescript
import { AgentToolInputRunRetrieveMemoryStoresTool } from "@orq-ai/node/models/operations";

let value: AgentToolInputRunRetrieveMemoryStoresTool = {
  type: "retrieve_memory_stores",
};
```

## Fields

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                         | [operations.RunAgentAgentToolInputRunAgentsRequestRequestBodySettingsToolsType](../../models/operations/runagentagenttoolinputrunagentsrequestrequestbodysettingstoolstype.md) | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `requiresApproval`                                                                                                                                                             | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether this tool requires approval before execution                                                                                                                           |