# UserMessage

## Example Usage

```typescript
import { UserMessage } from "@orq-ai/node/models/components";

let value: UserMessage = {
  role: "user",
  content: "<value>",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                       | [components.DeploymentsPrefixMessagesRole](../../models/components/deploymentsprefixmessagesrole.md)                         | :heavy_check_mark:                                                                                                           | The role of the messages author, in this case `user`.                                                                        |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | An optional name for the participant. Provides the model information to differentiate between participants of the same role. |
| `content`                                                                                                                    | *components.Content*                                                                                                         | :heavy_check_mark:                                                                                                           | The contents of the user message.                                                                                            |