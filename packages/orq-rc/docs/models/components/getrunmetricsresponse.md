# GetRunMetricsResponse

## Example Usage

```typescript
import { GetRunMetricsResponse } from "@orq-ai/node/models/components";

let value: GetRunMetricsResponse = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `metrics`                                                                            | Record<string, [components.MetricSummary](../../models/components/metricsummary.md)> | :heavy_minus_sign:                                                                   | Keyed "{task_column_id}_{metric_id}" like Run.metrics.                               |