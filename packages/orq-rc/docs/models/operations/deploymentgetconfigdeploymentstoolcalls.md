# DeploymentGetConfigDeploymentsToolCalls

## Example Usage

```typescript
import { DeploymentGetConfigDeploymentsToolCalls } from "@orq-ai/node/models/operations";

let value: DeploymentGetConfigDeploymentsToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                               | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | N/A                                                                                                                                                                |
| `index`                                                                                                                                                            | *number*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | N/A                                                                                                                                                                |
| `type`                                                                                                                                                             | [operations.DeploymentGetConfigDeploymentsResponse200ApplicationJSONType](../../models/operations/deploymentgetconfigdeploymentsresponse200applicationjsontype.md) | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `function`                                                                                                                                                         | [operations.DeploymentGetConfigDeploymentsResponseFunction](../../models/operations/deploymentgetconfigdeploymentsresponsefunction.md)                             | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |