# ExperimentAnnotationUpdateRequest

## Example Usage

```typescript
import { ExperimentAnnotationUpdateRequest } from "@orq-ai/node/models/operations";

let value: ExperimentAnnotationUpdateRequest = {
  experimentId: "<id>",
  runId: "<id>",
  annotationColumnId: "<id>",
  updateAnnotationColumnRequest: {},
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `experimentId`                                                                                       | *string*                                                                                             | :heavy_check_mark:                                                                                   | ID of the experiment.                                                                                |
| `runId`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | ID of the run.                                                                                       |
| `annotationColumnId`                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | ID of the annotation column.                                                                         |
| `updateAnnotationColumnRequest`                                                                      | [components.UpdateAnnotationColumnRequest](../../models/components/updateannotationcolumnrequest.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |