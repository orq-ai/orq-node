# SearchKnowledgeRequest

## Example Usage

```typescript
import { SearchKnowledgeRequest } from "@orq-ai/node/models/operations";

let value: SearchKnowledgeRequest = {
  knowledgeId: "<id>",
  searchKnowledgeRequest: {
    query: "<value>",
    rerankConfig: {
      model: "cohere/rerank-multilingual-v3.0",
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `knowledgeId`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | The unique identifier or key of the knowledge base.                                    |
| `searchKnowledgeRequest`                                                               | [components.SearchKnowledgeRequest](../../models/components/searchknowledgerequest.md) | :heavy_check_mark:                                                                     | A search request for chunks in a knowledge base                                        |