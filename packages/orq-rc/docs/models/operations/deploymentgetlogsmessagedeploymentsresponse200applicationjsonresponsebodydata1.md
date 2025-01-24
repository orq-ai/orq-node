# DeploymentGetLogsMessageDeploymentsResponse200ApplicationJSONResponseBodyData1

## Example Usage

```typescript
import { DeploymentGetLogsMessageDeploymentsResponse200ApplicationJSONResponseBodyData1 } from "@orq-ai/node/models/operations";

let value:
  DeploymentGetLogsMessageDeploymentsResponse200ApplicationJSONResponseBodyData1 =
    {
      role: "expected_output",
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
| `role`                                                                                                                                                                                                                     | [operations.DeploymentGetLogsMessageDeploymentsResponse200ApplicationJSONResponseBodyData1Evals7Role](../../models/operations/deploymentgetlogsmessagedeploymentsresponse200applicationjsonresponsebodydata1evals7role.md) | :heavy_check_mark:                                                                                                                                                                                                         | The role of the prompt message                                                                                                                                                                                             |
| `content`                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        |
| `toolCalls`                                                                                                                                                                                                                | [operations.DeploymentGetLogsMessageDeploymentsResponse200ApplicationJSONResponseBodyDataToolCalls](../../models/operations/deploymentgetlogsmessagedeploymentsresponse200applicationjsonresponsebodydatatoolcalls.md)[]   | :heavy_check_mark:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        |