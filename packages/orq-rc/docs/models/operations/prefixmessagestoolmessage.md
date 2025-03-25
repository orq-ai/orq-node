# PrefixMessagesToolMessage

## Example Usage

```typescript
import { PrefixMessagesToolMessage } from "@orq-ai/node/models/operations";

let value: PrefixMessagesToolMessage = {
  role: "tool",
  content: "<value>",
  toolCallId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                                                     | [operations.DeploymentStreamPrefixMessagesDeploymentsRequestRequestBody5Role](../../models/operations/deploymentstreamprefixmessagesdeploymentsrequestrequestbody5role.md) | :heavy_check_mark:                                                                                                                                                         | The role of the messages author, in this case tool.                                                                                                                        |
| `content`                                                                                                                                                                  | *operations.DeploymentStreamPrefixMessagesDeploymentsRequestContent*                                                                                                       | :heavy_check_mark:                                                                                                                                                         | The contents of the tool message.                                                                                                                                          |
| `toolCallId`                                                                                                                                                               | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Tool call that this message is responding to.                                                                                                                              |