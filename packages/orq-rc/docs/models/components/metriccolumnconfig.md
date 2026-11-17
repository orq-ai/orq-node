# MetricColumnConfig

Configuration of a metric column.

## Example Usage

```typescript
import { MetricColumnConfig } from "@orq-ai/node/models/components";

let value: MetricColumnConfig = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `metricKey`                                                                                      | *string*                                                                                         | :heavy_minus_sign:                                                                               | Metric shown: `cost`, `latency`, `ttft`, `input_tokens`, `output_tokens`<br/> or `reasoning_tokens`. |