# UpdateKnowledgeRequestBodyAgenticRagConfig

The Agentic RAG configuration for the knowledge base. If `null` is provided, Agentic RAG will be disabled.

## Example Usage

```typescript
import { UpdateKnowledgeRequestBodyAgenticRagConfig } from "@orq-ai/node/models/operations";

let value: UpdateKnowledgeRequestBodyAgenticRagConfig = {
  model: "Wrangler",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `model`                              | *string*                             | :heavy_check_mark:                   | The model to use for the Agentic RAG |