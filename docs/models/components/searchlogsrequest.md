# SearchLogsRequest

## Example Usage

```typescript
import { SearchLogsRequest } from "@orq-ai/node/models/components";

let value: SearchLogsRequest = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `from`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `to`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `query`                                                                                          | *string*                                                                                         | :heavy_minus_sign:                                                                               | Free-text query matched against the body field (case-insensitive).                               |
| `filterOperator`                                                                                 | *string*                                                                                         | :heavy_minus_sign:                                                                               | How to combine multiple filters: "and" (default) or "or", mirroring<br/> the traces filter_operator. |
| `filters`                                                                                        | [components.TraceFilter](../../models/components/tracefilter.md)[]                               | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `sort`                                                                                           | [components.TraceSort](../../models/components/tracesort.md)[]                                   | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `limit`                                                                                          | *number*                                                                                         | :heavy_minus_sign:                                                                               | Maximum rows to return. Defaults to 100 and is capped at 1000.                                   |
| `pageToken`                                                                                      | *string*                                                                                         | :heavy_minus_sign:                                                                               | Opaque cursor for pagination; empty or absent means the first page.                              |