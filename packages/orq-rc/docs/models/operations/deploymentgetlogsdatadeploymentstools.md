# DeploymentGetLogsDataDeploymentsTools

## Example Usage

```typescript
import { DeploymentGetLogsDataDeploymentsTools } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsDataDeploymentsTools = {
  type: "function",
  function: {
    name: "<value>",
    parameters: {
      type: "object",
      properties: {
        "key": "<value>",
      },
    },
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                     | [operations.DeploymentGetLogsDataDeploymentsType](../../models/operations/deploymentgetlogsdatadeploymentstype.md)         | :heavy_check_mark:                                                                                                         | The type of the tool. Currently, only `function` is supported.                                                             |
| `function`                                                                                                                 | [operations.DeploymentGetLogsDataDeploymentsFunction](../../models/operations/deploymentgetlogsdatadeploymentsfunction.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |