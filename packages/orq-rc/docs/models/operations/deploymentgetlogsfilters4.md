# DeploymentGetLogsFilters4

## Example Usage

```typescript
import { DeploymentGetLogsFilters4 } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsFilters4 = {
  type: "string_array",
  operator: "in",
  values: [
    "<value>",
  ],
  path: "/usr",
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                 | [operations.DeploymentGetLogsFiltersDeploymentsRequestRequestBody4Type](../../models/operations/deploymentgetlogsfiltersdeploymentsrequestrequestbody4type.md)         | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `operator`                                                                                                                                                             | [operations.DeploymentGetLogsFiltersDeploymentsRequestRequestBody4Operator](../../models/operations/deploymentgetlogsfiltersdeploymentsrequestrequestbody4operator.md) | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `values`                                                                                                                                                               | *string*[]                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `path`                                                                                                                                                                 | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |