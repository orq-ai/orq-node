# Evals3

## Example Usage

```typescript
import { Evals3 } from "@orq-ai/node/models/operations";

let value: Evals3 = {
  type: "boolean",
  value: "<value>",
  id: "<id>",
  status: "failed",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "account",
      accountId: "93478299-6351-4b05-be38-2fd5c9323afc",
    },
  ],
  evaluatorType: "input_evaluator",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                 | [operations.DeploymentGetLogsEvalsDeploymentsType](../../models/operations/deploymentgetlogsevalsdeploymentstype.md)                   | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `value`                                                                                                                                | *operations.EvalsValue*                                                                                                                | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `id`                                                                                                                                   | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `status`                                                                                                                               | [operations.DeploymentGetLogsEvalsStatus](../../models/operations/deploymentgetlogsevalsstatus.md)                                     | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `startedAt`                                                                                                                            | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `finishedAt`                                                                                                                           | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `relatedEntities`                                                                                                                      | *operations.DeploymentGetLogsEvalsRelatedEntities*[]                                                                                   | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `passed`                                                                                                                               | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `evaluatorType`                                                                                                                        | [operations.DeploymentGetLogsEvalsDeploymentsEvaluatorType](../../models/operations/deploymentgetlogsevalsdeploymentsevaluatortype.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |