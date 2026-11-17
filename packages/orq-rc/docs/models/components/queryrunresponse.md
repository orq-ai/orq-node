# QueryRunResponse

## Example Usage

```typescript
import { QueryRunResponse } from "@orq-ai/node/models/components";

let value: QueryRunResponse = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `rows`                                                                                             | [components.QueryRow](../../models/components/queryrow.md)[]                                       | :heavy_minus_sign:                                                                                 | Page of rows, in creation order.                                                                   |
| `hasMore`                                                                                          | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | Whether more rows follow this page.                                                                |
| `serverTimestamp`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | Value to pass as `updated_after` in the next incremental query: the<br/> server clock minus 3 seconds. |