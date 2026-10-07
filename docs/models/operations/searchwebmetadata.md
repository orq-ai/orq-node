# SearchWebMetadata

Details about this search request.

## Example Usage

```typescript
import { SearchWebMetadata } from "@orq-ai/node/models/operations";

let value: SearchWebMetadata = {
  latencyMs: 688986,
  provider: "exa",
  query: "<value>",
  requestId: "<id>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `latencyMs`                                                                                           | *number*                                                                                              | :heavy_check_mark:                                                                                    | Elapsed search processing time in milliseconds, including applied policies.                           |
| `provider`                                                                                            | [operations.SearchWebProvider](../../models/operations/searchwebprovider.md)                          | :heavy_check_mark:                                                                                    | Provider that executed the search.                                                                    |
| `query`                                                                                               | *string*                                                                                              | :heavy_check_mark:                                                                                    | Query sent to the provider after any required PII redaction.                                          |
| `requestId`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | ORQ-generated identifier for this search request. Distinct from the trace ID in the response headers. |