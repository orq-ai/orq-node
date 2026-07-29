# MonitorWidgetDisplay

## Example Usage

```typescript
import { MonitorWidgetDisplay } from "@orq-ai/node/models/components";

let value: MonitorWidgetDisplay = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `visualization`                                                                           | [components.Visualization](../../models/components/visualization.md)                      | :heavy_minus_sign:                                                                        | Chart style for timeseries widgets.                                                       |
| `unit`                                                                                    | [components.Unit](../../models/components/unit.md)                                        | :heavy_minus_sign:                                                                        | Unit used for axis and value formatting.                                                  |
| `sort`                                                                                    | [components.Sort](../../models/components/sort.md)                                        | :heavy_minus_sign:                                                                        | Value ordering for toplist widgets.                                                       |
| `showOverall`                                                                             | *boolean*                                                                                 | :heavy_minus_sign:                                                                        | When true, toplist widgets also show the overall total across all<br/> groups for the window. |
| `target`                                                                                  | *number*                                                                                  | :heavy_minus_sign:                                                                        | Optional threshold line rendered on timeseries widgets.                                   |
| `decimals`                                                                                | *number*                                                                                  | :heavy_minus_sign:                                                                        | Decimal places used when formatting values.                                               |