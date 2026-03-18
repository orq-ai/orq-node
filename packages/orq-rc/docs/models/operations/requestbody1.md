# RequestBody1

## Example Usage

```typescript
import { RequestBody1 } from "@orq-ai/node/models/operations";

let value: RequestBody1 = {
  id: "<id>",
  evaluationType: "human_review",
  humanReviewId: "<id>",
  type: "string",
  value: "<value>",
  traceId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier of the human evaluation                                                 |
| `evaluationType`                                                                              | [operations.EvaluationType](../../models/operations/evaluationtype.md)                        | :heavy_check_mark:                                                                            | The type of evaluation                                                                        |
| `humanReviewId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier of the human review                                                     |
| `source`                                                                                      | [operations.RequestBodySource](../../models/operations/requestbodysource.md)                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `reviewedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the item was reviewed                                                       |
| `type`                                                                                        | *"string"*                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `value`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `traceId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |