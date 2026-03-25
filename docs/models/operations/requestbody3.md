# RequestBody3

## Example Usage

```typescript
import { RequestBody3 } from "@orq-ai/node/models/operations";

let value: RequestBody3 = {
  id: "<id>",
  evaluationType: "human_review",
  humanReviewId: "<id>",
  type: "string_array",
  values: [
    "<value 1>",
    "<value 2>",
  ],
  traceId: "<id>",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                         | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The unique identifier of the human evaluation                                                                                                |
| `evaluationType`                                                                                                                             | [operations.PostV2FeedbackEvaluationRequestBodyEvaluationType](../../models/operations/postv2feedbackevaluationrequestbodyevaluationtype.md) | :heavy_check_mark:                                                                                                                           | The type of evaluation                                                                                                                       |
| `humanReviewId`                                                                                                                              | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The unique identifier of the human review                                                                                                    |
| `source`                                                                                                                                     | [operations.PostV2FeedbackEvaluationRequestBodyRequestSource](../../models/operations/postv2feedbackevaluationrequestbodyrequestsource.md)   | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `reviewedAt`                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                | :heavy_minus_sign:                                                                                                                           | The date and time the item was reviewed                                                                                                      |
| `type`                                                                                                                                       | *"string_array"*                                                                                                                             | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `values`                                                                                                                                     | *string*[]                                                                                                                                   | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `traceId`                                                                                                                                    | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |