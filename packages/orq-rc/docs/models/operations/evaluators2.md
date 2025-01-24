# Evaluators2

## Example Usage

```typescript
import { Evaluators2 } from "@orq-ai/node/models/operations";

let value: Evaluators2 = {
  id: "<id>",
  configType: "output_guardrail",
  evaluatorId: "<id>",
  type: "guardrail",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `configType`                                                                                             | [operations.EvaluatorsConfigType](../../models/operations/evaluatorsconfigtype.md)                       | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `evaluatorId`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `evaluatorEnabled`                                                                                       | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `sampleRate`                                                                                             | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `type`                                                                                                   | [operations.DeploymentGetLogsEvaluatorsType](../../models/operations/deploymentgetlogsevaluatorstype.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |