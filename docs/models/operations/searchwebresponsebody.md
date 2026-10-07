# SearchWebResponseBody

Search completed. Results may be empty or fewer than the requested limit.

## Example Usage

```typescript
import { SearchWebResponseBody } from "@orq-ai/node/models/operations";

let value: SearchWebResponseBody = {
  items: [
    {
      description: "glossy before by although fluctuate but equally pleasant",
      title: "<value>",
      url: "https://jaunty-birdbath.net/",
    },
  ],
  metadata: {
    latencyMs: 42492,
    provider: "exa",
    query: "<value>",
    requestId: "<id>",
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `items`                                                                                             | [operations.Items](../../models/operations/items.md)[]                                              | :heavy_check_mark:                                                                                  | Results in the provider's order, after any required PII redaction. Empty when no results are found. |
| `metadata`                                                                                          | [operations.SearchWebMetadata](../../models/operations/searchwebmetadata.md)                        | :heavy_check_mark:                                                                                  | Details about this search request.                                                                  |