# ExperimentEvalDeleteRequest

## Example Usage

```typescript
import { ExperimentEvalDeleteRequest } from "@orq-ai/node/models/operations";

let value: ExperimentEvalDeleteRequest = {
  experimentId: "<id>",
  runId: "<id>",
  evalId: "<id>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `experimentId`              | *string*                    | :heavy_check_mark:          | ID of the experiment.       |
| `runId`                     | *string*                    | :heavy_check_mark:          | ID of the run.              |
| `evalId`                    | *string*                    | :heavy_check_mark:          | ID of the evaluator column. |