# ToolMessage

## Example Usage

```typescript
import { ToolMessage } from "@orq-ai/node/models/components";

let value: ToolMessage = {
  role: "tool",
  content: "<value>",
  toolCallId: "<id>",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                         | [components.InvokeDeploymentRequestPrefixMessages5Role](../../models/components/invokedeploymentrequestprefixmessages5role.md) | :heavy_check_mark:                                                                                                             | The role of the messages author, in this case tool.                                                                            |
| `content`                                                                                                                      | *components.InvokeDeploymentRequestPrefixMessagesContent*                                                                      | :heavy_check_mark:                                                                                                             | The contents of the tool message.                                                                                              |
| `toolCallId`                                                                                                                   | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | Tool call that this message is responding to.                                                                                  |