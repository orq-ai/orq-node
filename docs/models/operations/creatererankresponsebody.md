# CreateRerankResponseBody

Returns the reranked documents.

## Example Usage

```typescript
import { CreateRerankResponseBody } from "@orq-ai/node/models/operations";

let value: CreateRerankResponseBody = {
  object: "list",
  results: [],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_minus_sign:                                                                 | A unique identifier for the rerank.                                                |
| `object`                                                                           | [operations.CreateRerankObject](../../models/operations/creatererankobject.md)     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `results`                                                                          | [operations.CreateRerankResults](../../models/operations/creatererankresults.md)[] | :heavy_check_mark:                                                                 | An ordered list of ranked documents                                                |
| `usage`                                                                            | [operations.CreateRerankUsage](../../models/operations/creatererankusage.md)       | :heavy_minus_sign:                                                                 | N/A                                                                                |