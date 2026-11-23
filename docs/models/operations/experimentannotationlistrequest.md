# ExperimentAnnotationListRequest

## Example Usage

```typescript
import { ExperimentAnnotationListRequest } from "@orq-ai/node/models/operations";

let value: ExperimentAnnotationListRequest = {
  experimentId: "<id>",
  runId: "<id>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `experimentId`        | *string*              | :heavy_check_mark:    | ID of the experiment. |
| `runId`               | *string*              | :heavy_check_mark:    | ID of the run.        |