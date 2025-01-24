# DeploymentGetLogsMessageDeployments1

## Example Usage

```typescript
import { DeploymentGetLogsMessageDeployments1 } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsMessageDeployments1 = {
  role: "prompt",
  toolCalls: [
    {
      type: "function",
      function: {
        name: "<value>",
        arguments: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                         | [operations.DeploymentGetLogsMessageDeploymentsResponse200Role](../../models/operations/deploymentgetlogsmessagedeploymentsresponse200role.md) | :heavy_check_mark:                                                                                                                             | The role of the prompt message                                                                                                                 |
| `content`                                                                                                                                      | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `toolCalls`                                                                                                                                    | [operations.DeploymentGetLogsMessageDeploymentsToolCalls](../../models/operations/deploymentgetlogsmessagedeploymentstoolcalls.md)[]           | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |