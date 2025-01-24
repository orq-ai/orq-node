# DeploymentGetLogsEvaluators1

## Example Usage

```typescript
import { DeploymentGetLogsEvaluators1 } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsEvaluators1 = {
  id: "<id>",
  configType: "input_guardrail",
  evaluatorId: "<id>",
  type: "evaluator",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                           | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `configType`                                                                                                                   | [operations.DeploymentGetLogsEvaluatorsConfigType](../../models/operations/deploymentgetlogsevaluatorsconfigtype.md)           | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `evaluatorId`                                                                                                                  | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `evaluatorEnabled`                                                                                                             | *boolean*                                                                                                                      | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `sampleRate`                                                                                                                   | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `type`                                                                                                                         | [operations.DeploymentGetLogsEvaluatorsDeploymentsType](../../models/operations/deploymentgetlogsevaluatorsdeploymentstype.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |