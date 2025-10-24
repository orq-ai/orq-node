# CreatePromptMessagesUserMessage

## Example Usage

```typescript
import { CreatePromptMessagesUserMessage } from "@orq-ai/node/models/operations";

let value: CreatePromptMessagesUserMessage = {
  role: "user",
  content: [
    {
      type: "file",
      file: {},
    },
  ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                       | [operations.CreatePromptMessagesPromptsRole](../../models/operations/createpromptmessagespromptsrole.md)                     | :heavy_check_mark:                                                                                                           | The role of the messages author, in this case `user`.                                                                        |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | An optional name for the participant. Provides the model information to differentiate between participants of the same role. |
| `content`                                                                                                                    | *operations.CreatePromptMessagesContent*                                                                                     | :heavy_check_mark:                                                                                                           | The contents of the user message.                                                                                            |