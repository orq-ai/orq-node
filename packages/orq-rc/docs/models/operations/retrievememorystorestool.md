# RetrieveMemoryStoresTool

Lists available memory stores

## Example Usage

```typescript
import { RetrieveMemoryStoresTool } from "@orq-ai/node/models/operations";

let value: RetrieveMemoryStoresTool = {
  type: "retrieve_memory_stores",
};
```

## Fields

| Field                                                                                                                                                                                                | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                               | [operations.CreateAgentRequestAgentToolInputCRUDAgentsRequestRequestBodySettingsToolsType](../../models/operations/createagentrequestagenttoolinputcrudagentsrequestrequestbodysettingstoolstype.md) | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `requiresApproval`                                                                                                                                                                                   | *boolean*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                   | Whether this tool requires approval before execution                                                                                                                                                 |