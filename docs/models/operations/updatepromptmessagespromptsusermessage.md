# UpdatePromptMessagesPromptsUserMessage

## Example Usage

```typescript
import { UpdatePromptMessagesPromptsUserMessage } from "@orq-ai/node/models/operations";

let value: UpdatePromptMessagesPromptsUserMessage = {
  role: "user",
  content: [],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                       | *"user"*                                                                                                                     | :heavy_check_mark:                                                                                                           | The role of the messages author, in this case `user`.                                                                        |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | An optional name for the participant. Provides the model information to differentiate between participants of the same role. |
| `content`                                                                                                                    | *operations.UpdatePromptMessagesPromptsResponse200Content*                                                                   | :heavy_check_mark:                                                                                                           | The contents of the user message.                                                                                            |