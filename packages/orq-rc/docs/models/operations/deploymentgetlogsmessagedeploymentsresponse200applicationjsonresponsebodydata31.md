# DeploymentGetLogsMessageDeploymentsResponse200ApplicationJSONResponseBodyData31

## Example Usage

```typescript
import { DeploymentGetLogsMessageDeploymentsResponse200ApplicationJSONResponseBodyData31 } from "@orq-ai/node/models/operations";

let value:
  DeploymentGetLogsMessageDeploymentsResponse200ApplicationJSONResponseBodyData31 =
    {
      role: "system",
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

| Field                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                                                                                                     | [operations.DeploymentGetLogsMessageDeploymentsResponse200ApplicationJSONResponseBodyData3Role](../../models/operations/deploymentgetlogsmessagedeploymentsresponse200applicationjsonresponsebodydata3role.md)             | :heavy_check_mark:                                                                                                                                                                                                         | The role of the prompt message                                                                                                                                                                                             |
| `content`                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        |
| `toolCalls`                                                                                                                                                                                                                | [operations.DeploymentGetLogsMessageDeploymentsResponse200ApplicationJSONResponseBodyData3ToolCalls](../../models/operations/deploymentgetlogsmessagedeploymentsresponse200applicationjsonresponsebodydata3toolcalls.md)[] | :heavy_check_mark:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        |