# NumberMetricSummary

Statistics of a numeric metric.

## Example Usage

```typescript
import { NumberMetricSummary } from "@orq-ai/node/models/components";

let value: NumberMetricSummary = {};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `min`                          | *number*                       | :heavy_minus_sign:             | Lowest value.                  |
| `max`                          | *number*                       | :heavy_minus_sign:             | Highest value.                 |
| `avg`                          | *number*                       | :heavy_minus_sign:             | Average value.                 |
| `sum`                          | *number*                       | :heavy_minus_sign:             | Sum of the values.             |
| `median`                       | *number*                       | :heavy_minus_sign:             | Approximate median.            |
| `range`                        | *number*                       | :heavy_minus_sign:             | `max` minus `min`.             |
| `stdDev`                       | *number*                       | :heavy_minus_sign:             | Population standard deviation. |
| `count`                        | *number*                       | :heavy_minus_sign:             | Number of rows with a value.   |