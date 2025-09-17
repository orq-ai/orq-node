# SearchKnowledgeAgenticRagConfig

Override the agentic RAG configuration for this search. If not provided, will use the knowledge base configured agentic RAG settings.

## Example Usage

```typescript
import { SearchKnowledgeAgenticRagConfig } from "@orq-ai/node/models/operations";

let value: SearchKnowledgeAgenticRagConfig = {
  model: "Land Cruiser",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `model`                                                                               | *string*                                                                              | :heavy_check_mark:                                                                    | The name of the model for the Agent to use. This model must support function calling. |