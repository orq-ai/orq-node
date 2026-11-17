# GetRunMetricsResponse

## Example Usage

```typescript
import { GetRunMetricsResponse } from "@orq-ai/node/models/components";

let value: GetRunMetricsResponse = {};
```

## Fields

| Field                                                                                                                                                                                        | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `metrics`                                                                                                                                                                                    | Record<string, [components.MetricSummary](../../models/components/metricsummary.md)>                                                                                                         | :heavy_minus_sign:                                                                                                                                                                           | Metrics keyed `{task_column_id}_{evaluator_id}` for evaluators and<br/> `{task_column_id}_orq_{metric}` for usage metrics such as `orq_cost` and<br/> `orq_latency`. Empty when the run has no data. |