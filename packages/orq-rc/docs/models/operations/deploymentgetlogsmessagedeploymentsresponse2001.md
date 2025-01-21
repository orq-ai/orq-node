# DeploymentGetLogsMessageDeploymentsResponse2001

## Example Usage

```typescript
import { DeploymentGetLogsMessageDeploymentsResponse2001 } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsMessageDeploymentsResponse2001 = {
  role: "correction",
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
| `role`                                                                                                                                                                                                         | [operations.DeploymentGetLogsMessageDeploymentsResponse200ApplicationJSONResponseBodyData5Role](../../models/operations/deploymentgetlogsmessagedeploymentsresponse200applicationjsonresponsebodydata5role.md) | :heavy_check_mark:                                                                                                                                                                                             | The role of the prompt message                                                                                                                                                                                 |
| `content`                                                                                                                                                                                                      | *string*                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                             | N/A                                                                                                                                                                                                            |
| `toolCalls`                                                                                                                                                                                                    | [operations.DeploymentGetLogsMessageDeploymentsResponse200ToolCalls](../../models/operations/deploymentgetlogsmessagedeploymentsresponse200toolcalls.md)[]                                                     | :heavy_check_mark:                                                                                                                                                                                             | N/A                                                                                                                                                                                                            |