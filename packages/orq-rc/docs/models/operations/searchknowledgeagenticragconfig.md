# SearchKnowledgeAgenticRagConfig

Override the agentic RAG configuration for this search. If not provided, will use the knowledge base configured agentic RAG settings.

## Example Usage

```typescript
import { SearchKnowledgeAgenticRagConfig } from "@orq-ai/node/models/operations";

let value: SearchKnowledgeAgenticRagConfig = {
  modelDbId: "<id>",
  provider: "leonardoai",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `modelDbId`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `provider`                                                                                                 | [operations.SearchKnowledgeKnowledgeProvider](../../models/operations/searchknowledgeknowledgeprovider.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `integrationId`                                                                                            | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |