# GetLogContextRequest

## Example Usage

```typescript
import { GetLogContextRequest } from "@orq-ai/node/models/components";

let value: GetLogContextRequest = {
  from: new Date("2025-06-06T17:58:03.771Z"),
  to: new Date("2026-10-18T10:18:54.852Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `from`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `to`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `query`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `filterOperator`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `filters`                                                                                     | [components.TraceFilter](../../models/components/tracefilter.md)[]                            | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `before`                                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | Number of matching records earlier than the anchor. Defaults to 10.                           |
| `after`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | Number of matching records later than the anchor. Defaults to 10.                             |
| `oql`                                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | Optional OQL pipeline. It cannot be combined with query or filters.                           |