# DeploymentCreateMetricMessages5

## Example Usage

```typescript
import { DeploymentCreateMetricMessages5 } from "@orq-ai/node/models/operations";

let value: DeploymentCreateMetricMessages5 = {
  role: "tool",
  content: [
    "<value>",
  ],
  toolCallId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                                                                   | [operations.DeploymentCreateMetricMessagesDeploymentsMetricsRequestRequestBody5Role](../../models/operations/deploymentcreatemetricmessagesdeploymentsmetricsrequestrequestbody5role.md) | :heavy_check_mark:                                                                                                                                                                       | The role of the messages author, in this case tool.                                                                                                                                      |
| `content`                                                                                                                                                                                | *operations.DeploymentCreateMetricMessagesDeploymentsMetricsRequestContent*                                                                                                              | :heavy_check_mark:                                                                                                                                                                       | The contents of the tool message.                                                                                                                                                        |
| `toolCallId`                                                                                                                                                                             | *string*                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                       | Tool call that this message is responding to.                                                                                                                                            |