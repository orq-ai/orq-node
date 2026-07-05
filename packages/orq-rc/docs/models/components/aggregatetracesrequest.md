# AggregateTracesRequest

## Example Usage

```typescript
import { AggregateTracesRequest } from "@orq-ai/node/models/components";

let value: AggregateTracesRequest = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `from`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `to`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `filters`                                                                                     | [components.TraceFilter](../../models/components/tracefilter.md)[]                            | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `groupBy`                                                                                     | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `compute`                                                                                     | [components.TraceCompute](../../models/components/tracecompute.md)[]                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `limit`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `filterOperator`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |