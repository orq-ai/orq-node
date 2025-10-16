# QueryKnowledgeBaseTool

Queries knowledge bases for information

## Example Usage

```typescript
import { QueryKnowledgeBaseTool } from "@orq-ai/node/models/operations";

let value: QueryKnowledgeBaseTool = {
  type: "query_knowledge_base",
};
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                     | [operations.CreateAgentAgentToolInputCRUDAgentsRequestRequestBodySettingsTools10Type](../../models/operations/createagentagenttoolinputcrudagentsrequestrequestbodysettingstools10type.md) | :heavy_check_mark:                                                                                                                                                                         | N/A                                                                                                                                                                                        |
| `requiresApproval`                                                                                                                                                                         | *boolean*                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                         | Whether this tool requires approval before execution                                                                                                                                       |