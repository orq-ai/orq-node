# MetricSummary

Summary of one metric. Exactly one of `number`, `boolean` and `categorical`
 is set, depending on the metric's output type.

## Example Usage

```typescript
import { MetricSummary } from "@orq-ai/node/models/components";

let value: MetricSummary = {};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `number`                                                                                                                             | [components.NumberMetricSummary](../../models/components/numbermetricsummary.md)                                                     | :heavy_minus_sign:                                                                                                                   | Set for numeric metrics.                                                                                                             |
| `boolean`                                                                                                                            | [components.BooleanMetricSummary](../../models/components/booleanmetricsummary.md)                                                   | :heavy_minus_sign:                                                                                                                   | Set for pass or fail evaluators.                                                                                                     |
| `categorical`                                                                                                                        | [components.CategoricalMetricSummary](../../models/components/categoricalmetricsummary.md)                                           | :heavy_minus_sign:                                                                                                                   | Set for evaluators that return labels.                                                                                               |
| `baseline`                                                                                                                           | [components.MetricBaseline](../../models/components/metricbaseline.md)                                                               | :heavy_minus_sign:                                                                                                                   | Comparison with the baseline run. Null unless `baseline_run_id` was given, and for categorical metrics or a baseline without values. |