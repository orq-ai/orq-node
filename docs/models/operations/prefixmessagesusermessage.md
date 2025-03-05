# PrefixMessagesUserMessage

## Example Usage

```typescript
import { PrefixMessagesUserMessage } from "@orq-ai/node/models/operations";

let value: PrefixMessagesUserMessage = {
  role: "user",
  content: "<value>",
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                             | [operations.DeploymentStreamPrefixMessagesDeploymentsRequestRole](../../models/operations/deploymentstreamprefixmessagesdeploymentsrequestrole.md) | :heavy_check_mark:                                                                                                                                 | The role of the messages author, in this case `user`.                                                                                              |
| `name`                                                                                                                                             | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | An optional name for the participant. Provides the model information to differentiate between participants of the same role.                       |
| `content`                                                                                                                                          | *operations.DeploymentStreamPrefixMessagesContent*                                                                                                 | :heavy_check_mark:                                                                                                                                 | The contents of the user message.                                                                                                                  |