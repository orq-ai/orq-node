# Seven

## Example Usage

```typescript
import { Seven } from "@orq-ai/node/models/operations";

let value: Seven = {
  operator: "is_not_empty",
  type: "evaluator",
  selectedOptionId: "<id>",
  options: [
    {
      name: "<value>",
      path: "/opt/lib",
      type: "multi-value-array",
      id: "<id>",
      evaluatorId: "<id>",
      evaluatorType: "python_eval",
      evaluatorOutputType: "number",
    },
  ],
  name: "<value>",
  path: "/var/yp",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `operator`                                                                                                                                                               | *operations.DeploymentGetLogsFiltersDeploymentsRequestRequestBodyQuery7Operator*                                                                                         | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `value`                                                                                                                                                                  | *any*                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `type`                                                                                                                                                                   | [operations.DeploymentGetLogsFiltersDeploymentsRequestRequestBodyQuery7Type](../../models/operations/deploymentgetlogsfiltersdeploymentsrequestrequestbodyquery7type.md) | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `selectedOptionId`                                                                                                                                                       | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `options`                                                                                                                                                                | [operations.DeploymentGetLogsFiltersDeploymentsOptions](../../models/operations/deploymentgetlogsfiltersdeploymentsoptions.md)[]                                         | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `name`                                                                                                                                                                   | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `path`                                                                                                                                                                   | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `hideOperators`                                                                                                                                                          | *operations.DeploymentGetLogsFiltersDeploymentsRequestRequestBodyQuery7HideOperators1*[]                                                                                 | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |