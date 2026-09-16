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

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                               | *"tool"*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The role of the messages author, in this case tool.                                                                                  |
| `content`                                                                                                                            | *operations.DeploymentGetConfigPrefixMessagesDeploymentsRequestRequestBody5Content*                                                  | :heavy_check_mark:                                                                                                                   | The contents of the tool message.                                                                                                    |
| `toolCallId`                                                                                                                         | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | Tool call that this message is responding to.                                                                                        |
| `cacheControl`                                                                                                                       | [operations.DeploymentGetConfigPrefixMessagesCacheControl](../../models/operations/deploymentgetconfigprefixmessagescachecontrol.md) | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |