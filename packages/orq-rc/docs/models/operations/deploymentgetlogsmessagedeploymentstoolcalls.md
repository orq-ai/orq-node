# DeploymentGetLogsMessageDeploymentsToolCalls

## Example Usage

```typescript
import { DeploymentGetLogsMessageDeploymentsToolCalls } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsMessageDeploymentsToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                             | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `index`                                                                                                                          | *number*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `type`                                                                                                                           | [operations.DeploymentGetLogsMessageDeploymentsType](../../models/operations/deploymentgetlogsmessagedeploymentstype.md)         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `function`                                                                                                                       | [operations.DeploymentGetLogsMessageDeploymentsFunction](../../models/operations/deploymentgetlogsmessagedeploymentsfunction.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |