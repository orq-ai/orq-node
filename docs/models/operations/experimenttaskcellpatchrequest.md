# ExperimentTaskCellPatchRequest

## Example Usage

```typescript
import { ExperimentTaskCellPatchRequest } from "@orq-ai/node/models/operations";

let value: ExperimentTaskCellPatchRequest = {
  experimentId: "<id>",
  runId: "<id>",
  taskId: "<id>",
  datapointId: "<id>",
  patchTaskCellRequest: {},
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `experimentId`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `runId`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `taskId`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `datapointId`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `patchTaskCellRequest`                                                             | [components.PatchTaskCellRequest](../../models/components/patchtaskcellrequest.md) | :heavy_check_mark:                                                                 | N/A                                                                                |