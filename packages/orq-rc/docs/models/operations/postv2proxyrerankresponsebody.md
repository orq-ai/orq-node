# PostV2ProxyRerankResponseBody

Returns the reranked documents.

## Example Usage

```typescript
import { PostV2ProxyRerankResponseBody } from "@orq-ai/node/models/operations";

let value: PostV2ProxyRerankResponseBody = {
  object: "list",
  results: [
    {
      object: "rerank",
      index: 2941.12,
      relevanceScore: 2452.92,
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | A unique identifier for the rerank.                                                          |
| `object`                                                                                     | [operations.PostV2ProxyRerankObject](../../models/operations/postv2proxyrerankobject.md)     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `results`                                                                                    | [operations.PostV2ProxyRerankResults](../../models/operations/postv2proxyrerankresults.md)[] | :heavy_check_mark:                                                                           | An ordered list of ranked documents                                                          |
| `usage`                                                                                      | [operations.PostV2ProxyRerankUsage](../../models/operations/postv2proxyrerankusage.md)       | :heavy_minus_sign:                                                                           | N/A                                                                                          |