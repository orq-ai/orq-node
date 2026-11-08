# ExperimentReviewUpdateRequest

## Example Usage

```typescript
import { ExperimentReviewUpdateRequest } from "@orq-ai/node/models/operations";

let value: ExperimentReviewUpdateRequest = {
  experimentId: "<id>",
  runId: "<id>",
  reviewId: "<id>",
  updateReviewColumnRequest: {},
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `experimentId`                                                                               | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `runId`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `reviewId`                                                                                   | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `updateReviewColumnRequest`                                                                  | [components.UpdateReviewColumnRequest](../../models/components/updatereviewcolumnrequest.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |