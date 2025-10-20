# UpdatePromptMessagesUserMessage

## Example Usage

```typescript
import { UpdatePromptMessagesUserMessage } from "@orq-ai/node/models/operations";

let value: UpdatePromptMessagesUserMessage = {
  role: "user",
  content: [
    {
      type: "file",
      file: {
        fileData: "<value>",
        filename: "example.file",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                       | [operations.UpdatePromptMessagesPromptsRole](../../models/operations/updatepromptmessagespromptsrole.md)                     | :heavy_check_mark:                                                                                                           | The role of the messages author, in this case `user`.                                                                        |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | An optional name for the participant. Provides the model information to differentiate between participants of the same role. |
| `content`                                                                                                                    | *operations.UpdatePromptMessagesContent*                                                                                     | :heavy_check_mark:                                                                                                           | The contents of the user message.                                                                                            |