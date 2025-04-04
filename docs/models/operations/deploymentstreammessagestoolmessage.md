# DeploymentStreamMessagesToolMessage

## Example Usage

```typescript
import { DeploymentStreamMessagesToolMessage } from "@orq-ai/node/models/operations";

let value: DeploymentStreamMessagesToolMessage = {
  role: "tool",
  content: "<value>",
  toolCallId: "<id>",
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                                         | [operations.DeploymentStreamMessagesDeploymentsRequestRequestBody5Role](../../models/operations/deploymentstreammessagesdeploymentsrequestrequestbody5role.md) | :heavy_check_mark:                                                                                                                                             | The role of the messages author, in this case tool.                                                                                                            |
| `content`                                                                                                                                                      | *operations.DeploymentStreamMessagesDeploymentsRequestContent*                                                                                                 | :heavy_check_mark:                                                                                                                                             | The contents of the tool message.                                                                                                                              |
| `toolCallId`                                                                                                                                                   | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | Tool call that this message is responding to.                                                                                                                  |