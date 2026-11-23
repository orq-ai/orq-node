# ExperimentAnnotationCellPatchRequest

## Example Usage

```typescript
import { ExperimentAnnotationCellPatchRequest } from "@orq-ai/node/models/operations";

let value: ExperimentAnnotationCellPatchRequest = {
  experimentId: "<id>",
  runId: "<id>",
  annotationColumnId: "<id>",
  datapointId: "<id>",
  patchAnnotationCellRequest: {
    value: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    taskId: "<id>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `experimentId`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | ID of the experiment.                                                                          |
| `runId`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | ID of the run.                                                                                 |
| `annotationColumnId`                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | ID of the annotation column.                                                                   |
| `datapointId`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | ID of the row.                                                                                 |
| `patchAnnotationCellRequest`                                                                   | [components.PatchAnnotationCellRequest](../../models/components/patchannotationcellrequest.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |