# AgentToolInputRunQueryKnowledgeBaseTool

Queries knowledge bases for information

## Example Usage

```typescript
import { AgentToolInputRunQueryKnowledgeBaseTool } from "@orq-ai/node/models/operations";

let value: AgentToolInputRunQueryKnowledgeBaseTool = {
  type: "query_knowledge_base",
};
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                             | [operations.RunAgentAgentToolInputRunAgentsRequestRequestBodySettingsTools10Type](../../models/operations/runagentagenttoolinputrunagentsrequestrequestbodysettingstools10type.md) | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |
| `requiresApproval`                                                                                                                                                                 | *boolean*                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                 | Whether this tool requires approval before execution                                                                                                                               |