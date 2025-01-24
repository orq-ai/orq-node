# Filters3

## Example Usage

```typescript
import { Filters3 } from "@orq-ai/node/models/operations";

let value: Filters3 = {
  operator: "is_on_or_before",
  value: {
    criteria: {},
    mode: "date",
  },
  type: "object",
  name: "<value>",
  path: "/Applications",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `operator`                                                                                                                       | [operations.DeploymentGetLogsFiltersDeploymentsOperator](../../models/operations/deploymentgetlogsfiltersdeploymentsoperator.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `value`                                                                                                                          | [operations.FiltersValue](../../models/operations/filtersvalue.md)                                                               | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `type`                                                                                                                           | [operations.DeploymentGetLogsFiltersDeploymentsType](../../models/operations/deploymentgetlogsfiltersdeploymentstype.md)         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `name`                                                                                                                           | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `path`                                                                                                                           | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `hideOperators`                                                                                                                  | *operations.DeploymentGetLogsFiltersHideOperators*[]                                                                             | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |