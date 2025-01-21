# Filters4

## Example Usage

```typescript
import { Filters4 } from "@orq-ai/node/models/operations";

let value: Filters4 = {
  operator: "is_greater_than_or_equal_to",
  value: 2484.13,
  type: "date",
  name: "<value>",
  path: "/mnt",
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `operator`                                                                                                                                     | [operations.DeploymentGetLogsFiltersDeploymentsRequestOperator](../../models/operations/deploymentgetlogsfiltersdeploymentsrequestoperator.md) | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `value`                                                                                                                                        | *operations.DeploymentGetLogsFiltersValue*                                                                                                     | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `type`                                                                                                                                         | [operations.DeploymentGetLogsFiltersDeploymentsRequestType](../../models/operations/deploymentgetlogsfiltersdeploymentsrequesttype.md)         | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `name`                                                                                                                                         | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `path`                                                                                                                                         | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `hideOperators`                                                                                                                                | *operations.DeploymentGetLogsFiltersDeploymentsHideOperators*[]                                                                                | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |