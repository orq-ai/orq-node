# AgentToolInputRunRetrieveKnowledgeBasesTool

Lists available knowledge bases

## Example Usage

```typescript
import { AgentToolInputRunRetrieveKnowledgeBasesTool } from "@orq-ai/node/models/operations";

let value: AgentToolInputRunRetrieveKnowledgeBasesTool = {
  type: "retrieve_knowledge_bases",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `type`                                                                                              | *"retrieve_knowledge_bases"*                                                                        | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `requiresApproval`                                                                                  | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Whether this tool requires approval before execution                                                |
| `configuration`                                                                                     | Record<string, *any*>                                                                               | :heavy_minus_sign:                                                                                  | Static tool configuration set at design time. Merged over LLM-provided arguments at execution time. |