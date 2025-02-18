# DeploymentStreamDeploymentsToolCalls

## Example Usage

```typescript
import { DeploymentStreamDeploymentsToolCalls } from "@orq-ai/node/models/operations";

let value: DeploymentStreamDeploymentsToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `index`                                                                                                          | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `type`                                                                                                           | [operations.DeploymentStreamDeploymentsType](../../models/operations/deploymentstreamdeploymentstype.md)         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `function`                                                                                                       | [operations.DeploymentStreamDeploymentsFunction](../../models/operations/deploymentstreamdeploymentsfunction.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |