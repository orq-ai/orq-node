# DeploymentGetLogsMessageDeploymentsResponse200ApplicationJSONResponseBody1

## Example Usage

```typescript
import { DeploymentGetLogsMessageDeploymentsResponse200ApplicationJSONResponseBody1 } from "@orq-ai/node/models/operations";

let value:
  DeploymentGetLogsMessageDeploymentsResponse200ApplicationJSONResponseBody1 = {
    role: "tool",
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
| `role`                                                                                                                                                                                                                                           | [operations.DeploymentGetLogsMessageDeploymentsResponse200ApplicationJSONResponseBodyData4Evals7WorkflowRunRole](../../models/operations/deploymentgetlogsmessagedeploymentsresponse200applicationjsonresponsebodydata4evals7workflowrunrole.md) | :heavy_check_mark:                                                                                                                                                                                                                               | The role of the prompt message                                                                                                                                                                                                                   |
| `content`                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                              |
| `toolCalls`                                                                                                                                                                                                                                      | [operations.DeploymentGetLogsMessageDeploymentsResponse200ApplicationJSONResponseBodyToolCalls](../../models/operations/deploymentgetlogsmessagedeploymentsresponse200applicationjsonresponsebodytoolcalls.md)[]                                 | :heavy_check_mark:                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                              |