# Evals4

## Example Usage

```typescript
import { Evals4 } from "@orq-ai/node/models/operations";

let value: Evals4 = {
  type: "string_array",
  values: [
    "<value>",
  ],
  id: "<id>",
  status: "pending",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "account",
      accountId: "0f17d636-d073-40c0-9682-e629a60a32d8",
    },
  ],
  evaluatorType: "output_guardrail",
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                 | [operations.DeploymentGetLogsEvalsDeploymentsResponseType](../../models/operations/deploymentgetlogsevalsdeploymentsresponsetype.md)                   | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `values`                                                                                                                                               | *string*[]                                                                                                                                             | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `id`                                                                                                                                                   | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `status`                                                                                                                                               | [operations.DeploymentGetLogsEvalsDeploymentsStatus](../../models/operations/deploymentgetlogsevalsdeploymentsstatus.md)                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `startedAt`                                                                                                                                            | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `finishedAt`                                                                                                                                           | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `relatedEntities`                                                                                                                                      | *operations.DeploymentGetLogsEvalsDeploymentsRelatedEntities*[]                                                                                        | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `passed`                                                                                                                                               | *boolean*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `evaluatorType`                                                                                                                                        | [operations.DeploymentGetLogsEvalsDeploymentsResponseEvaluatorType](../../models/operations/deploymentgetlogsevalsdeploymentsresponseevaluatortype.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |