# DeploymentGetLogsEvalsTools

## Example Usage

```typescript
import { DeploymentGetLogsEvalsTools } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsEvalsTools = {
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
| `type`                                                                                                                                                                                                                             | [operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyData27WorkflowRunType](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200applicationjsonresponsebodydata27workflowruntype.md) | :heavy_check_mark:                                                                                                                                                                                                                 | The type of the tool. Currently, only `function` is supported.                                                                                                                                                                     |
| `function`                                                                                                                                                                                                                         | [operations.DeploymentGetLogsEvalsFunction](../../models/operations/deploymentgetlogsevalsfunction.md)                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                |