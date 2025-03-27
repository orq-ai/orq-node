# SearchKnowledgeRequest

## Example Usage

```typescript
import { SearchKnowledgeRequest } from "@orq-ai/node/models/operations";

let value: SearchKnowledgeRequest = {
  knowledgeId: "<id>",
  requestBody: {
    query: "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `knowledgeId`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `requestBody`                                                                                  | [operations.SearchKnowledgeRequestBody](../../models/operations/searchknowledgerequestbody.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |