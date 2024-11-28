# DeploymentInvokeMessageToolCalls

## Example Usage

```typescript
import { DeploymentInvokeMessageToolCalls } from "@orq-ai/node/models/operations";

let value: DeploymentInvokeMessageToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `index`                                                                                                  | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `type`                                                                                                   | [operations.DeploymentInvokeMessageType](../../models/operations/deploymentinvokemessagetype.md)         | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `function`                                                                                               | [operations.DeploymentInvokeMessageFunction](../../models/operations/deploymentinvokemessagefunction.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |