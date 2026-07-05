# MessagesToolMessage

## Example Usage

```typescript
import { MessagesToolMessage } from "@orq-ai/node/models/operations";

let value: MessagesToolMessage = {
  role: "tool",
  content: "<value>",
  toolCallId: null,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `role`                                                                             | *"tool"*                                                                           | :heavy_check_mark:                                                                 | The role of the messages author, in this case tool.                                |
| `content`                                                                          | *operations.DeploymentGetConfigMessagesDeploymentsRequestRequestBodyContent*       | :heavy_check_mark:                                                                 | The contents of the tool message.                                                  |
| `toolCallId`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | Tool call that this message is responding to.                                      |
| `cacheControl`                                                                     | [operations.MessagesCacheControl](../../models/operations/messagescachecontrol.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |