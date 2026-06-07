# PostV2FeedbackEvaluationRequestBody2

## Example Usage

```typescript
import { PostV2FeedbackEvaluationRequestBody2 } from "@orq-ai/node/models/operations";

let value: PostV2FeedbackEvaluationRequestBody2 = {
  id: "<id>",
  evaluationType: "human_review",
  humanReviewId: "<id>",
  type: "number",
  value: 5323.73,
  traceId: "<id>",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The unique identifier of the human evaluation                                                                                |
| `evaluationType`                                                                                                             | [operations.RequestBodyEvaluationType](../../models/operations/requestbodyevaluationtype.md)                                 | :heavy_check_mark:                                                                                                           | The type of evaluation                                                                                                       |
| `humanReviewId`                                                                                                              | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The unique identifier of the human review                                                                                    |
| `source`                                                                                                                     | [operations.PostV2FeedbackEvaluationRequestBodySource](../../models/operations/postv2feedbackevaluationrequestbodysource.md) | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `reviewedAt`                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                | :heavy_minus_sign:                                                                                                           | The date and time the item was reviewed                                                                                      |
| `type`                                                                                                                       | *"number"*                                                                                                                   | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `value`                                                                                                                      | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `traceId`                                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |