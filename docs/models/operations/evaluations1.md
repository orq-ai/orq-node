# Evaluations1

## Example Usage

```typescript
import { Evaluations1 } from "@orq-ai/node/models/operations";

let value: Evaluations1 = {
  id: "<id>",
  evaluationType: "human_review",
  humanReviewId: "<id>",
  reviewedById: "<id>",
  type: "string",
  value: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier of the human evaluation                                                 |
| `evaluationType`                                                                              | [operations.EvaluationType](../../models/operations/evaluationtype.md)                        | :heavy_check_mark:                                                                            | The type of evaluation                                                                        |
| `humanReviewId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier of the human review                                                     |
| `source`                                                                                      | [operations.Source](../../models/operations/source.md)                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `reviewedById`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier of the user who reviewed the item                                       |
| `reviewedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the item was reviewed                                                       |
| `type`                                                                                        | [operations.EvaluationsType](../../models/operations/evaluationstype.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `value`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |