# AgentToolInputCRUDRetrieveKnowledgeBasesTool

Lists available knowledge bases

## Example Usage

```typescript
import { AgentToolInputCRUDRetrieveKnowledgeBasesTool } from "@orq-ai/node/models/operations";

let value: AgentToolInputCRUDRetrieveKnowledgeBasesTool = {
  type: "retrieve_knowledge_bases",
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                   | [operations.UpdateAgentAgentToolInputCRUDAgentsRequestRequestBodySettingsTools9Type](../../models/operations/updateagentagenttoolinputcrudagentsrequestrequestbodysettingstools9type.md) | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `requiresApproval`                                                                                                                                                                       | *boolean*                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                       | Whether this tool requires approval before execution                                                                                                                                     |