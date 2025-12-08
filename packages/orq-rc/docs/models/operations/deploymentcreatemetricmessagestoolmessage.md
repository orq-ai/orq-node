# DeploymentCreateMetricMessagesToolMessage

## Example Usage

```typescript
import { DeploymentCreateMetricMessagesToolMessage } from "@orq-ai/node/models/operations";

let value: DeploymentCreateMetricMessagesToolMessage = {
  role: "tool",
  content: [],
  toolCallId: "<id>",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                         | *"tool"*                                                                                                                       | :heavy_check_mark:                                                                                                             | The role of the messages author, in this case tool.                                                                            |
| `content`                                                                                                                      | *operations.DeploymentCreateMetricMessagesDeploymentsMetricsRequestRequestBody5Content*                                        | :heavy_check_mark:                                                                                                             | The contents of the tool message.                                                                                              |
| `toolCallId`                                                                                                                   | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | Tool call that this message is responding to.                                                                                  |
| `cacheControl`                                                                                                                 | [operations.DeploymentCreateMetricMessagesCacheControl](../../models/operations/deploymentcreatemetricmessagescachecontrol.md) | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |