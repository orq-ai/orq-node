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

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `experimentId`                                                                            | *string*                                                                                  | :heavy_check_mark:                                                                        | ID of the experiment.                                                                     |
| `runId`                                                                                   | *string*                                                                                  | :heavy_check_mark:                                                                        | ID of the run.                                                                            |
| `baselineRunId`                                                                           | *string*                                                                                  | :heavy_minus_sign:                                                                        | Run of the same experiment to compare against. A run without values<br/> returns no baseline. |