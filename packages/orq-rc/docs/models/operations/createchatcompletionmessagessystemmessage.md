# CreateChatCompletionMessagesSystemMessage

Developer-provided instructions that the model should follow, regardless of messages sent by the user.

## Example Usage

```typescript
import { CreateChatCompletionMessagesSystemMessage } from "@orq-ai/node/models/operations";

let value: CreateChatCompletionMessagesSystemMessage = {
  role: "system",
  content: [],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                       | *"system"*                                                                                                                   | :heavy_check_mark:                                                                                                           | The role of the messages author, in this case `system`.                                                                      |
| `content`                                                                                                                    | *operations.CreateChatCompletionMessagesContent*                                                                             | :heavy_check_mark:                                                                                                           | The contents of the system message.                                                                                          |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | An optional name for the participant. Provides the model information to differentiate between participants of the same role. |