# ExperimentReviewCreateRequest

## Example Usage

```typescript
import { ExperimentReviewCreateRequest } from "@orq-ai/node/models/operations";

let value: ExperimentReviewCreateRequest = {
  experimentId: "<id>",
  runId: "<id>",
  createReviewColumnRequest: {},
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `experimentId`                                                                               | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `runId`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `createReviewColumnRequest`                                                                  | [components.CreateReviewColumnRequest](../../models/components/createreviewcolumnrequest.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |