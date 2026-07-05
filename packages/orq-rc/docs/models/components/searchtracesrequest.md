# SearchTracesRequest

## Example Usage

```typescript
import { SearchTracesRequest } from "@orq-ai/node/models/components";

let value: SearchTracesRequest = {
  from: new Date("2025-03-04T17:34:11.849Z"),
  to: new Date("2026-09-03T11:18:19.825Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `from`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `to`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `filters`                                                                                     | [components.TraceFilter](../../models/components/tracefilter.md)[]                            | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `filterOperator`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `query`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `sort`                                                                                        | [components.TraceSort](../../models/components/tracesort.md)[]                                | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `limit`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `pageToken`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |