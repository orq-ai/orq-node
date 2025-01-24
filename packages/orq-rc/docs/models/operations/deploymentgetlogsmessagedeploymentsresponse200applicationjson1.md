# DeploymentGetLogsMessageDeploymentsResponse200ApplicationJson1

## Example Usage

```typescript
import { DeploymentGetLogsMessageDeploymentsResponse200ApplicationJson1 } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsMessageDeploymentsResponse200ApplicationJson1 = {
  role: "assistant",
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

| Field                                                                                                                                                                                                          | Type                                                                                                                                                                                                           | Required                                                                                                                                                                                                       | Description                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                                                                                         | [operations.DeploymentGetLogsMessageDeploymentsResponse200ApplicationJSONResponseBodyData2Role](../../models/operations/deploymentgetlogsmessagedeploymentsresponse200applicationjsonresponsebodydata2role.md) | :heavy_check_mark:                                                                                                                                                                                             | The role of the prompt message                                                                                                                                                                                 |
| `content`                                                                                                                                                                                                      | *string*                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                             | N/A                                                                                                                                                                                                            |
| `toolCalls`                                                                                                                                                                                                    | [operations.DeploymentGetLogsMessageDeploymentsResponse200ApplicationJSONToolCalls](../../models/operations/deploymentgetlogsmessagedeploymentsresponse200applicationjsontoolcalls.md)[]                       | :heavy_check_mark:                                                                                                                                                                                             | N/A                                                                                                                                                                                                            |