# ListDeploymentVersionsToolCalls

## Example Usage

```typescript
import { ListDeploymentVersionsToolCalls } from "@orq-ai/node/models/operations";

let value: ListDeploymentVersionsToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `index`                                                                                                                      | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `type`                                                                                                                       | [operations.ListDeploymentVersionsDeploymentsType](../../models/operations/listdeploymentversionsdeploymentstype.md)         | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `function`                                                                                                                   | [operations.ListDeploymentVersionsDeploymentsFunction](../../models/operations/listdeploymentversionsdeploymentsfunction.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |