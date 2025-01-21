# DeploymentGetLogsMessageDeploymentsResponse1

## Example Usage

```typescript
import { DeploymentGetLogsMessageDeploymentsResponse1 } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsMessageDeploymentsResponse1 = {
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

| Field                                                                                                                                                                                                        | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                                                                                                       | [operations.DeploymentGetLogsMessageDeploymentsResponse200ApplicationJSONResponseBodyDataRole](../../models/operations/deploymentgetlogsmessagedeploymentsresponse200applicationjsonresponsebodydatarole.md) | :heavy_check_mark:                                                                                                                                                                                           | The role of the prompt message                                                                                                                                                                               |
| `content`                                                                                                                                                                                                    | *string*                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                           | N/A                                                                                                                                                                                                          |
| `toolCalls`                                                                                                                                                                                                  | [operations.DeploymentGetLogsMessageDeploymentsResponseToolCalls](../../models/operations/deploymentgetlogsmessagedeploymentsresponsetoolcalls.md)[]                                                         | :heavy_check_mark:                                                                                                                                                                                           | N/A                                                                                                                                                                                                          |