# Evals5

## Example Usage

```typescript
import { Evals5 } from "@orq-ai/node/models/operations";

let value: Evals5 = {
  type: "rouge_n",
  value: {
    rouge1: {
      f1: 1392.13,
      precision: 9117.78,
      recall: 8757.85,
    },
    rouge2: {
      f1: 8157.54,
      precision: 5711.53,
      recall: 3601.89,
    },
    rougeL: {
      f1: 9587.64,
      precision: 9094.41,
      recall: 170.27,
    },
  },
  id: "<id>",
  status: "pending",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
  evaluatorType: "input_guardrail",
};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                       | [operations.DeploymentGetLogsEvalsDeploymentsResponse200Type](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200type.md)                   | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `value`                                                                                                                                                      | [operations.DeploymentGetLogsEvalsValue](../../models/operations/deploymentgetlogsevalsvalue.md)                                                             | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `id`                                                                                                                                                         | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `status`                                                                                                                                                     | [operations.DeploymentGetLogsEvalsDeploymentsResponseStatus](../../models/operations/deploymentgetlogsevalsdeploymentsresponsestatus.md)                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `startedAt`                                                                                                                                                  | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `finishedAt`                                                                                                                                                 | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `relatedEntities`                                                                                                                                            | *operations.DeploymentGetLogsEvalsDeploymentsResponseRelatedEntities*[]                                                                                      | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `passed`                                                                                                                                                     | *boolean*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `evaluatorType`                                                                                                                                              | [operations.DeploymentGetLogsEvalsDeploymentsResponse200EvaluatorType](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200evaluatortype.md) | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |