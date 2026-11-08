# ExperimentRunCellUpdateRequest

## Example Usage

```typescript
import { ExperimentRunCellUpdateRequest } from "@orq-ai/node/models/operations";

let value: ExperimentRunCellUpdateRequest = {
  experimentId: "<id>",
  runId: "<id>",
  rowId: "<id>",
  cellId: "<id>",
  updateRunCellRequest: {},
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `experimentId`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `runId`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `rowId`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `cellId`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `updateRunCellRequest`                                                             | [components.UpdateRunCellRequest](../../models/components/updateruncellrequest.md) | :heavy_check_mark:                                                                 | N/A                                                                                |