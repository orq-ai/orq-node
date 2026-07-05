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

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `type`                                                                                              | *"query_knowledge_base"*                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `requiresApproval`                                                                                  | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Whether this tool requires approval before execution                                                |
| `configuration`                                                                                     | Record<string, *any*>                                                                               | :heavy_minus_sign:                                                                                  | Static tool configuration set at design time. Merged over LLM-provided arguments at execution time. |