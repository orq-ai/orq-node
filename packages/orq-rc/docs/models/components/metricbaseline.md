# MetricBaseline

Comparison with the baseline run.

## Example Usage

```typescript
import { MetricBaseline } from "@orq-ai/node/models/components";

let value: MetricBaseline = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `avg`                                                                               | *number*                                                                            | :heavy_minus_sign:                                                                  | Average of the baseline run.                                                        |
| `delta`                                                                             | *number*                                                                            | :heavy_minus_sign:                                                                  | This run's average minus the baseline average.                                      |
| `pctChange`                                                                         | *number*                                                                            | :heavy_minus_sign:                                                                  | `delta` as a percentage of the baseline average; 0 when the baseline<br/> average is 0. |
| `direction`                                                                         | *string*                                                                            | :heavy_minus_sign:                                                                  | `up`, `down` or `same`, by the sign of `delta`.                                     |