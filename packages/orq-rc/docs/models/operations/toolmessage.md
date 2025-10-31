# ToolMessage

## Example Usage

```typescript
import { ToolMessage } from "@orq-ai/node/models/operations";

let value: ToolMessage = {
  role: "tool",
  content: "<value>",
  toolCallId: "<id>",
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                                   | [operations.DeploymentGetConfigPrefixMessagesDeploymentsRequestRole](../../models/operations/deploymentgetconfigprefixmessagesdeploymentsrequestrole.md) | :heavy_check_mark:                                                                                                                                       | The role of the messages author, in this case tool.                                                                                                      |
| `content`                                                                                                                                                | *operations.DeploymentGetConfigPrefixMessagesContent*                                                                                                    | :heavy_check_mark:                                                                                                                                       | The contents of the tool message.                                                                                                                        |
| `toolCallId`                                                                                                                                             | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | Tool call that this message is responding to.                                                                                                            |