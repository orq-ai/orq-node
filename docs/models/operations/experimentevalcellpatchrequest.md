# ExperimentEvalCellPatchRequest

## Example Usage

```typescript
import { ExperimentEvalCellPatchRequest } from "@orq-ai/node/models/operations";

let value: ExperimentEvalCellPatchRequest = {
  experimentId: "<id>",
  runId: "<id>",
  evalId: "<id>",
  datapointId: "<id>",
  patchEvalCellRequest: {},
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `experimentId`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `runId`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `evalId`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `datapointId`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `patchEvalCellRequest`                                                             | [components.PatchEvalCellRequest](../../models/components/patchevalcellrequest.md) | :heavy_check_mark:                                                                 | N/A                                                                                |