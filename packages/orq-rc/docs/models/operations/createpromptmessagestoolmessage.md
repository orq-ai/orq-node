# CreatePromptMessagesToolMessage

## Example Usage

```typescript
import { CreatePromptMessagesToolMessage } from "@orq-ai/node/models/operations";

let value: CreatePromptMessagesToolMessage = {
  role: "tool",
  content: [
    "<value 1>",
    "<value 2>",
  ],
  toolCallId: "<id>",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                       | [operations.CreatePromptMessagesPromptsRequestRequestBodyRole](../../models/operations/createpromptmessagespromptsrequestrequestbodyrole.md) | :heavy_check_mark:                                                                                                                           | The role of the messages author, in this case tool.                                                                                          |
| `content`                                                                                                                                    | *operations.CreatePromptMessagesPromptsRequestContent*                                                                                       | :heavy_check_mark:                                                                                                                           | The contents of the tool message.                                                                                                            |
| `toolCallId`                                                                                                                                 | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | Tool call that this message is responding to.                                                                                                |