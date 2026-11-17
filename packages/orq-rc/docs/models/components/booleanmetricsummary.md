# BooleanMetricSummary

Statistics of a pass or fail metric.

## Example Usage

```typescript
import { BooleanMetricSummary } from "@orq-ai/node/models/components";

let value: BooleanMetricSummary = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `passedRate`                                                         | *number*                                                             | :heavy_minus_sign:                                                   | Percentage of rows that passed, 0 to 100, rounded to a whole number. |
| `count`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | Number of rows with a value.                                         |