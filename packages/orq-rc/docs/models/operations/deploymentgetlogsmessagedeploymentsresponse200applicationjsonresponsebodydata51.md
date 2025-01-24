# DeploymentGetLogsMessageDeploymentsResponse200ApplicationJSONResponseBodyData51

## Example Usage

```typescript
import { DeploymentGetLogsMessageDeploymentsResponse200ApplicationJSONResponseBodyData51 } from "@orq-ai/node/models/operations";

let value:
  DeploymentGetLogsMessageDeploymentsResponse200ApplicationJSONResponseBodyData51 =
    {
      role: "user",
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

| Field                                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                                                                                                                                           | [operations.DeploymentGetLogsMessageDeploymentsResponse200ApplicationJSONResponseBodyData5Evals7WorkflowRunRole](../../models/operations/deploymentgetlogsmessagedeploymentsresponse200applicationjsonresponsebodydata5evals7workflowrunrole.md) | :heavy_check_mark:                                                                                                                                                                                                                               | The role of the prompt message                                                                                                                                                                                                                   |
| `content`                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                              |
| `toolCalls`                                                                                                                                                                                                                                      | [operations.DeploymentGetLogsMessageDeploymentsResponse200ApplicationJSONResponseBodyData5ToolCalls](../../models/operations/deploymentgetlogsmessagedeploymentsresponse200applicationjsonresponsebodydata5toolcalls.md)[]                       | :heavy_check_mark:                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                              |