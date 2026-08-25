# KnowledgeBasesServiceUpdateRequestAgenticRagConfig

The Agentic RAG configuration for the knowledge base. If `null` is provided, Agentic RAG will be disabled.

## Example Usage

```typescript
import { KnowledgeBasesServiceUpdateRequestAgenticRagConfig } from "@orq-ai/node/models/components";

let value: KnowledgeBasesServiceUpdateRequestAgenticRagConfig = {
  model: "Model X",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `model`                              | *string*                             | :heavy_check_mark:                   | The model to use for the Agentic RAG |