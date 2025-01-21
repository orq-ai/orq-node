# DeploymentGetLogsDataDeploymentsResponseTools

## Example Usage

```typescript
import { DeploymentGetLogsDataDeploymentsResponseTools } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsDataDeploymentsResponseTools = {
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

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                     | [operations.DeploymentGetLogsDataDeploymentsResponseType](../../models/operations/deploymentgetlogsdatadeploymentsresponsetype.md)         | :heavy_check_mark:                                                                                                                         | The type of the tool. Currently, only `function` is supported.                                                                             |
| `function`                                                                                                                                 | [operations.DeploymentGetLogsDataDeploymentsResponseFunction](../../models/operations/deploymentgetlogsdatadeploymentsresponsefunction.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |