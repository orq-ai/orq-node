# ListDatasetDatapointsEvaluations3

## Example Usage

```typescript
import { ListDatasetDatapointsEvaluations3 } from "@orq-ai/node/models/operations";

let value: ListDatasetDatapointsEvaluations3 = {
  id: "<id>",
  evaluationType: "human_review",
  humanReviewId: "<id>",
  reviewedById: "<id>",
  type: "string_array",
  values: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                   | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The unique identifier of the human evaluation                                                                                          |
| `evaluationType`                                                                                                                       | [operations.ListDatasetDatapointsEvaluationsEvaluationType](../../models/operations/listdatasetdatapointsevaluationsevaluationtype.md) | :heavy_check_mark:                                                                                                                     | The type of evaluation                                                                                                                 |
| `humanReviewId`                                                                                                                        | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The unique identifier of the human review                                                                                              |
| `source`                                                                                                                               | [operations.ListDatasetDatapointsEvaluationsSource](../../models/operations/listdatasetdatapointsevaluationssource.md)                 | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `reviewedById`                                                                                                                         | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The unique identifier of the user who reviewed the item                                                                                |
| `reviewedAt`                                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                          | :heavy_minus_sign:                                                                                                                     | The date and time the item was reviewed                                                                                                |
| `type`                                                                                                                                 | [operations.ListDatasetDatapointsEvaluationsDatasetsType](../../models/operations/listdatasetdatapointsevaluationsdatasetstype.md)     | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `values`                                                                                                                               | *string*[]                                                                                                                             | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |