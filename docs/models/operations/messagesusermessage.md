# MessagesUserMessage

## Example Usage

```typescript
import { MessagesUserMessage } from "@orq-ai/node/models/operations";

let value: MessagesUserMessage = {
  role: "user",
  content: "<value>",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                         | [operations.DeploymentGetConfigMessagesDeploymentsRole](../../models/operations/deploymentgetconfigmessagesdeploymentsrole.md) | :heavy_check_mark:                                                                                                             | The role of the messages author, in this case `user`.                                                                          |
| `name`                                                                                                                         | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | An optional name for the participant. Provides the model information to differentiate between participants of the same role.   |
| `content`                                                                                                                      | *operations.MessagesContent*                                                                                                   | :heavy_check_mark:                                                                                                             | The contents of the user message.                                                                                              |