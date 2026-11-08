# ExperimentRunMetricsGetRequest

## Example Usage

```typescript
import { ExperimentRunMetricsGetRequest } from "@orq-ai/node/models/operations";

let value: ExperimentRunMetricsGetRequest = {
  experimentId: "<id>",
  runId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `experimentId`     | *string*           | :heavy_check_mark: | N/A                |
| `runId`            | *string*           | :heavy_check_mark: | N/A                |
| `baselineRunId`    | *string*           | :heavy_minus_sign: | N/A                |