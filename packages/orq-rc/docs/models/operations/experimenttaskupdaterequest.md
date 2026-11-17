# ExperimentTaskUpdateRequest

## Example Usage

```typescript
import { ExperimentTaskUpdateRequest } from "@orq-ai/node/models/operations";

let value: ExperimentTaskUpdateRequest = {
  experimentId: "<id>",
  runId: "<id>",
  taskId: "<id>",
  updateTaskColumnRequest: {},
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `experimentId`                                                                           | *string*                                                                                 | :heavy_check_mark:                                                                       | ID of the experiment.                                                                    |
| `runId`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | ID of the run.                                                                           |
| `taskId`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | ID of the task column.                                                                   |
| `updateTaskColumnRequest`                                                                | [components.UpdateTaskColumnRequest](../../models/components/updatetaskcolumnrequest.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |