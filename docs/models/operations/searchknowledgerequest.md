# SearchKnowledgeRequest

## Example Usage

```typescript
import { SearchKnowledgeRequest } from "@orq-ai/node/models/operations";

let value: SearchKnowledgeRequest = {
  knowledgeId: "<id>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `knowledgeId`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | The unique identifier or key of the knowledge base                                             |
| `requestBody`                                                                                  | [operations.SearchKnowledgeRequestBody](../../models/operations/searchknowledgerequestbody.md) | :heavy_minus_sign:                                                                             | A search request for chunks in a knowledge base                                                |