# UpdateKnowledgeRequestBodyKnowledgeAgenticRagConfig

The Agentic RAG configuration for the knowledge base. If `null` is provided, Agentic RAG will be disabled.

## Example Usage

```typescript
import { UpdateKnowledgeRequestBodyKnowledgeAgenticRagConfig } from "@orq-ai/node/models/operations";

let value: UpdateKnowledgeRequestBodyKnowledgeAgenticRagConfig = {
  model: "Spyder",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `model`                              | *string*                             | :heavy_check_mark:                   | The model to use for the Agentic RAG |