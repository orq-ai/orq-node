# DeploymentGetLogsEvalsDeploymentsTools

## Example Usage

```typescript
import { DeploymentGetLogsEvalsDeploymentsTools } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsEvalsDeploymentsTools = {
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

| Field                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                             | [operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyData37WorkflowRunType](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200applicationjsonresponsebodydata37workflowruntype.md) | :heavy_check_mark:                                                                                                                                                                                                                 | The type of the tool. Currently, only `function` is supported.                                                                                                                                                                     |
| `function`                                                                                                                                                                                                                         | [operations.DeploymentGetLogsEvalsDeploymentsFunction](../../models/operations/deploymentgetlogsevalsdeploymentsfunction.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                |