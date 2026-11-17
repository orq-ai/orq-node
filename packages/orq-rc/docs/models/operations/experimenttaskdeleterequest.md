# ExperimentTaskDeleteRequest

## Example Usage

```typescript
import { ExperimentTaskDeleteRequest } from "@orq-ai/node/models/operations";

let value: ExperimentTaskDeleteRequest = {
  experimentId: "<id>",
  runId: "<id>",
  taskId: "<id>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `experimentId`         | *string*               | :heavy_check_mark:     | ID of the experiment.  |
| `runId`                | *string*               | :heavy_check_mark:     | ID of the run.         |
| `taskId`               | *string*               | :heavy_check_mark:     | ID of the task column. |