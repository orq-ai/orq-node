# DeploymentInvokeMessageDeploymentsToolCalls

## Example Usage

```typescript
import { DeploymentInvokeMessageDeploymentsToolCalls } from "@orq-ai/node/models/operations";

let value: DeploymentInvokeMessageDeploymentsToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                           | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `index`                                                                                                                        | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `type`                                                                                                                         | [operations.DeploymentInvokeMessageDeploymentsType](../../models/operations/deploymentinvokemessagedeploymentstype.md)         | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `function`                                                                                                                     | [operations.DeploymentInvokeMessageDeploymentsFunction](../../models/operations/deploymentinvokemessagedeploymentsfunction.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |