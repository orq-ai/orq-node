# ExperimentAnnotationDeleteRequest

## Example Usage

```typescript
import { ExperimentAnnotationDeleteRequest } from "@orq-ai/node/models/operations";

let value: ExperimentAnnotationDeleteRequest = {
  experimentId: "<id>",
  runId: "<id>",
  annotationColumnId: "<id>",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `experimentId`               | *string*                     | :heavy_check_mark:           | ID of the experiment.        |
| `runId`                      | *string*                     | :heavy_check_mark:           | ID of the run.               |
| `annotationColumnId`         | *string*                     | :heavy_check_mark:           | ID of the annotation column. |