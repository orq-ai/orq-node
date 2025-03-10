# UserMessage

## Example Usage

```typescript
import { UserMessage } from "@orq-ai/node/models/operations";

let value: UserMessage = {
  role: "user",
  content: [
    {
      type: "text",
      text: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                       | [operations.DeploymentGetConfigPrefixMessagesRole](../../models/operations/deploymentgetconfigprefixmessagesrole.md)         | :heavy_check_mark:                                                                                                           | The role of the messages author, in this case `user`.                                                                        |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | An optional name for the participant. Provides the model information to differentiate between participants of the same role. |
| `content`                                                                                                                    | *operations.Content*                                                                                                         | :heavy_check_mark:                                                                                                           | The contents of the user message.                                                                                            |