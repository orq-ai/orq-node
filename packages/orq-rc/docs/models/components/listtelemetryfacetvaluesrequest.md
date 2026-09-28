# ListTelemetryFacetValuesRequest

## Example Usage

```typescript
import { ListTelemetryFacetValuesRequest } from "@orq-ai/node/models/components";

let value: ListTelemetryFacetValuesRequest = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `source`                                                                                      | [components.TelemetrySource](../../models/components/telemetrysource.md)                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metric`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `field`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `from`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `to`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `filters`                                                                                     | [components.TraceFilter](../../models/components/tracefilter.md)[]                            | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `filterOperator`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `limit`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |