# ExperimentReviewCellPatchRequest

## Example Usage

```typescript
import { ExperimentReviewCellPatchRequest } from "@orq-ai/node/models/operations";

let value: ExperimentReviewCellPatchRequest = {
  experimentId: "<id>",
  runId: "<id>",
  reviewId: "<id>",
  datapointId: "<id>",
  patchReviewCellRequest: {},
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `experimentId`                                                                         | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `runId`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `reviewId`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `datapointId`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `patchReviewCellRequest`                                                               | [components.PatchReviewCellRequest](../../models/components/patchreviewcellrequest.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |