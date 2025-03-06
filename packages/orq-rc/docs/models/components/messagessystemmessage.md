# MessagesSystemMessage

## Example Usage

```typescript
import { MessagesSystemMessage } from "@orq-ai/node/models/components";

let value: MessagesSystemMessage = {
  role: "system",
  content: "<value>",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                       | [components.DeploymentsMessagesRole](../../models/components/deploymentsmessagesrole.md)                                     | :heavy_check_mark:                                                                                                           | The role of the messages author, in this case `system`.                                                                      |
| `content`                                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The contents of the system message.                                                                                          |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | An optional name for the participant. Provides the model information to differentiate between participants of the same role. |