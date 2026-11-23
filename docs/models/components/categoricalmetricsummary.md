# CategoricalMetricSummary

Statistics of a metric that returns labels.

## Example Usage

```typescript
import { CategoricalMetricSummary } from "@orq-ai/node/models/components";

let value: CategoricalMetricSummary = {};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `labels`                     | Record<string, *number*>     | :heavy_minus_sign:           | Number of rows per label.    |
| `count`                      | *number*                     | :heavy_minus_sign:           | Number of rows with a label. |