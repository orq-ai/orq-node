# ExperimentRunListRequest

## Example Usage

```typescript
import { ExperimentRunListRequest } from "@orq-ai/node/models/operations";

let value: ExperimentRunListRequest = {
  experimentId: "<id>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `experimentId`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | ID of the experiment.                                                                          |
| `limit`                                                                                        | *number*                                                                                       | :heavy_minus_sign:                                                                             | Page size, 1 to 200. Defaults to 25.                                                           |
| `startingAfter`                                                                                | *string*                                                                                       | :heavy_minus_sign:                                                                             | Cursor for forward pagination. Set to the `run_id` of the last item from<br/> the previous page. |
| `endingBefore`                                                                                 | *string*                                                                                       | :heavy_minus_sign:                                                                             | Cursor for backward pagination. Set to the `run_id` of the first item from<br/> the previous page. |
| `includeMetrics`                                                                               | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | Include each run's average evaluator results in `metrics`.                                     |