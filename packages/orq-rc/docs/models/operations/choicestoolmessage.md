# ChoicesToolMessage

## Example Usage

```typescript
import { ChoicesToolMessage } from "@orq-ai/node/models/operations";

let value: ChoicesToolMessage = {
  role: "tool",
  content: [
    "<value>",
  ],
  toolCallId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                                                                               | [operations.DeploymentCreateMetricChoicesDeploymentsMetricsRequestRequestBodyRole](../../models/operations/deploymentcreatemetricchoicesdeploymentsmetricsrequestrequestbodyrole.md) | :heavy_check_mark:                                                                                                                                                                   | The role of the messages author, in this case tool.                                                                                                                                  |
| `content`                                                                                                                                                                            | *operations.DeploymentCreateMetricChoicesDeploymentsMetricsContent*                                                                                                                  | :heavy_check_mark:                                                                                                                                                                   | The contents of the tool message.                                                                                                                                                    |
| `toolCallId`                                                                                                                                                                         | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | Tool call that this message is responding to.                                                                                                                                        |