# Evals2

## Example Usage

```typescript
import { Evals2 } from "@orq-ai/node/models/operations";

let value: Evals2 = {
  type: "number",
  value: 8663.57,
  id: "<id>",
  status: "pending",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "account",
      accountId: "ee4dcf2e-0aae-4328-9f4c-54ac0986c586",
    },
  ],
  evaluatorType: "output_evaluator",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [operations.DeploymentGetLogsEvalsType](../../models/operations/deploymentgetlogsevalstype.md)                   | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `value`                                                                                                          | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `status`                                                                                                         | [operations.EvalsStatus](../../models/operations/evalsstatus.md)                                                 | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `startedAt`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `finishedAt`                                                                                                     | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `relatedEntities`                                                                                                | *operations.EvalsRelatedEntities*[]                                                                              | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `passed`                                                                                                         | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `evaluatorType`                                                                                                  | [operations.DeploymentGetLogsEvalsEvaluatorType](../../models/operations/deploymentgetlogsevalsevaluatortype.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |