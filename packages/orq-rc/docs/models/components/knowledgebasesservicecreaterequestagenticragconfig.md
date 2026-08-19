# KnowledgeBasesServiceCreateRequestAgenticRagConfig

The Agentic RAG configuration for the knowledge base. If `null` is provided, Agentic RAG will be disabled.

## Example Usage

```typescript
import { KnowledgeBasesServiceCreateRequestAgenticRagConfig } from "@orq-ai/node/models/components";

let value: KnowledgeBasesServiceCreateRequestAgenticRagConfig = {
  model: "Model T",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `model`                              | *string*                             | :heavy_check_mark:                   | The model to use for the Agentic RAG |