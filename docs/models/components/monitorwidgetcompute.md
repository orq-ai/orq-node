# MonitorWidgetCompute

## Example Usage

```typescript
import { MonitorWidgetCompute } from "@orq-ai/node/models/components";

let value: MonitorWidgetCompute = {
  metric: "<value>",
  operation: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `metric`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | Source-owned metric identifier.                                          |
| `operation`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Source-owned aggregation operation advertised by telemetry capabilities. |