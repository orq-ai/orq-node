# SearchKnowledgeRequestBody

## Example Usage

```typescript
import { SearchKnowledgeRequestBody } from "@orq-ai/node/models/operations";

let value: SearchKnowledgeRequestBody = {
  query: "<value>",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `query`                                                                                                                                  | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `retrievalConfig`                                                                                                                        | *operations.RetrievalConfig*                                                                                                             | :heavy_minus_sign:                                                                                                                       | Allow to modify the retrieval config for the search. If not provided, the knowledge base configuration set in the database will be used. |