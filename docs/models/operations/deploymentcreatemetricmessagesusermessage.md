# DeploymentCreateMetricMessagesUserMessage

## Example Usage

```typescript
import { DeploymentCreateMetricMessagesUserMessage } from "@orq-ai/node/models/operations";

let value: DeploymentCreateMetricMessagesUserMessage = {
  role: "user",
  content: [
    {
      type: "input_audio",
      inputAudio: {
        data: "<value>",
        format: "wav",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                                           | [operations.DeploymentCreateMetricMessagesDeploymentsMetricsRequestRole](../../models/operations/deploymentcreatemetricmessagesdeploymentsmetricsrequestrole.md) | :heavy_check_mark:                                                                                                                                               | The role of the messages author, in this case `user`.                                                                                                            |
| `name`                                                                                                                                                           | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | An optional name for the participant. Provides the model information to differentiate between participants of the same role.                                     |
| `content`                                                                                                                                                        | *operations.DeploymentCreateMetricMessagesContent*                                                                                                               | :heavy_check_mark:                                                                                                                                               | The contents of the user message.                                                                                                                                |