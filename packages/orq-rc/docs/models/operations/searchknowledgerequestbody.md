# SearchKnowledgeRequestBody

A search request for chunks in a knowledge base

## Example Usage

```typescript
import { SearchKnowledgeRequestBody } from "@orq-ai/node/models/operations";

let value: SearchKnowledgeRequestBody = {
  query: "<value>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `query`                                                                                                          | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The query to use to search the knowledge base                                                                    |
| `topK`                                                                                                           | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | The number of results to return. If not provided, will default to the knowledge base configured `top_k`          |
| `threshold`                                                                                                      | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | The threshold to apply to the search. If not provided, will default to the knowledge base configured `threshold` |
| `filter`                                                                                                         | *operations.Filter*                                                                                              | :heavy_minus_sign:                                                                                               | The filter to apply to the search                                                                                |
| `searchOptions`                                                                                                  | [operations.SearchOptions](../../models/operations/searchoptions.md)                                             | :heavy_minus_sign:                                                                                               | Additional search options                                                                                        |