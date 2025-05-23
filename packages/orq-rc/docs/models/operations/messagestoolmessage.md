# MessagesToolMessage

## Example Usage

```typescript
import { MessagesToolMessage } from "@orq-ai/node/models/operations";

let value: MessagesToolMessage = {
  role: "tool",
  content: "<value>",
  toolCallId: "<id>",
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                                                             | [operations.DeploymentGetConfigMessagesDeploymentsRequestRequestBodyRole](../../models/operations/deploymentgetconfigmessagesdeploymentsrequestrequestbodyrole.md) | :heavy_check_mark:                                                                                                                                                 | The role of the messages author, in this case tool.                                                                                                                |
| `content`                                                                                                                                                          | *operations.DeploymentGetConfigMessagesDeploymentsContent*                                                                                                         | :heavy_check_mark:                                                                                                                                                 | The contents of the tool message.                                                                                                                                  |
| `toolCallId`                                                                                                                                                       | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | Tool call that this message is responding to.                                                                                                                      |