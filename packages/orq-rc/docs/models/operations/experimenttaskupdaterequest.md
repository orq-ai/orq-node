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
| `experimentId`                                                                           | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `runId`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `taskId`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updateTaskColumnRequest`                                                                | [components.UpdateTaskColumnRequest](../../models/components/updatetaskcolumnrequest.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |