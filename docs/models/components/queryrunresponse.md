# QueryRunResponse

## Example Usage

```typescript
import { QueryRunResponse } from "@orq-ai/node/models/components";

let value: QueryRunResponse = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `rows`                                                                                        | [components.QueryRow](../../models/components/queryrow.md)[]                                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `hasMore`                                                                                     | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `serverTimestamp`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Cursor for the next incremental query (server clock minus a skew buffer).                     |