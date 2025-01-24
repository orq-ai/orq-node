# DeploymentGetLogsEvalsDeploymentsResponseTools

## Example Usage

```typescript
import { DeploymentGetLogsEvalsDeploymentsResponseTools } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsEvalsDeploymentsResponseTools = {
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
| `type`                                                                                                                                                                                                                             | [operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyData47WorkflowRunType](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200applicationjsonresponsebodydata47workflowruntype.md) | :heavy_check_mark:                                                                                                                                                                                                                 | The type of the tool. Currently, only `function` is supported.                                                                                                                                                                     |
| `function`                                                                                                                                                                                                                         | [operations.DeploymentGetLogsEvalsDeploymentsResponseFunction](../../models/operations/deploymentgetlogsevalsdeploymentsresponsefunction.md)                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                |