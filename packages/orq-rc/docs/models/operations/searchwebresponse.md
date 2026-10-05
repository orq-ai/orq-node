# SearchWebResponse

## Example Usage

```typescript
import { SearchWebResponse } from "@orq-ai/node/models/operations";

let value: SearchWebResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    items: [],
    metadata: {
      latencyMs: 42492,
      provider: "exa",
      query: "<value>",
      requestId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [operations.SearchWebResponseBody](../../models/operations/searchwebresponsebody.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |