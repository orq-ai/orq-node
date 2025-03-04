# DeploymentGetConfigToolCalls

## Example Usage

```typescript
import { DeploymentGetConfigToolCalls } from "@orq-ai/node/models/operations";

let value: DeploymentGetConfigToolCalls = {
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
| `type`                                                                                                                         | [operations.DeploymentGetConfigDeploymentsResponseType](../../models/operations/deploymentgetconfigdeploymentsresponsetype.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `function`                                                                                                                     | [operations.DeploymentGetConfigDeploymentsFunction](../../models/operations/deploymentgetconfigdeploymentsfunction.md)         | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |