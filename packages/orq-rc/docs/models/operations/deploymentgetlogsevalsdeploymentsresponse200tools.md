# DeploymentGetLogsEvalsDeploymentsResponse200Tools

## Example Usage

```typescript
import { DeploymentGetLogsEvalsDeploymentsResponse200Tools } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsEvalsDeploymentsResponse200Tools = {
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
| `type`                                                                                                                                                                                                                             | [operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyData57WorkflowRunType](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200applicationjsonresponsebodydata57workflowruntype.md) | :heavy_check_mark:                                                                                                                                                                                                                 | The type of the tool. Currently, only `function` is supported.                                                                                                                                                                     |
| `function`                                                                                                                                                                                                                         | [operations.DeploymentGetLogsEvalsDeploymentsResponse200Function](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200function.md)                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                |