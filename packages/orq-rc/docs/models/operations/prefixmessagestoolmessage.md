# PrefixMessagesToolMessage

## Example Usage

```typescript
import { PrefixMessagesToolMessage } from "@orq-ai/node/models/operations";

let value: PrefixMessagesToolMessage = {
  role: "tool",
  content: [],
  toolCallId: "<id>",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                         | *"tool"*                                                                                                                       | :heavy_check_mark:                                                                                                             | The role of the messages author, in this case tool.                                                                            |
| `content`                                                                                                                      | *operations.DeploymentStreamPrefixMessagesDeploymentsRequestRequestBody5Content*                                               | :heavy_check_mark:                                                                                                             | The contents of the tool message.                                                                                              |
| `toolCallId`                                                                                                                   | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | Tool call that this message is responding to.                                                                                  |
| `cacheControl`                                                                                                                 | [operations.DeploymentStreamPrefixMessagesCacheControl](../../models/operations/deploymentstreamprefixmessagescachecontrol.md) | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |