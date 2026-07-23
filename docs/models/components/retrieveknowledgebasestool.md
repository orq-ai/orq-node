# RetrieveKnowledgeBasesTool

Lists available knowledge bases

## Example Usage

```typescript
import { RetrieveKnowledgeBasesTool } from "@orq-ai/node/models/components";

let value: RetrieveKnowledgeBasesTool = {
  type: "retrieve_knowledge_bases",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `type`                                                                                              | [components.AgentToolInputCrud9Type](../../models/components/agenttoolinputcrud9type.md)            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `requiresApproval`                                                                                  | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Whether this tool requires approval before execution                                                |
| `configuration`                                                                                     | Record<string, *any*>                                                                               | :heavy_minus_sign:                                                                                  | Static tool configuration set at design time. Merged over LLM-provided arguments at execution time. |