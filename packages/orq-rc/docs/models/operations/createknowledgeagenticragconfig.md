# CreateKnowledgeAgenticRagConfig

The Agentic RAG configuration for the knowledge base. If `null` is provided, Agentic RAG will be disabled.

## Example Usage

```typescript
import { CreateKnowledgeAgenticRagConfig } from "@orq-ai/node/models/operations";

let value: CreateKnowledgeAgenticRagConfig = {
  model: "XTS",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `model`                              | *string*                             | :heavy_check_mark:                   | The model to use for the Agentic RAG |