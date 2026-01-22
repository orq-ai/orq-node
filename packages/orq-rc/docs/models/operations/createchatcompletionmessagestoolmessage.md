# CreateChatCompletionMessagesToolMessage

## Example Usage

```typescript
import { CreateChatCompletionMessagesToolMessage } from "@orq-ai/node/models/operations";

let value: CreateChatCompletionMessagesToolMessage = {
  role: "tool",
  content: "<value>",
  toolCallId: "<id>",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                     | *"tool"*                                                                                                                   | :heavy_check_mark:                                                                                                         | The role of the messages author, in this case tool.                                                                        |
| `content`                                                                                                                  | *operations.CreateChatCompletionMessagesRouterChatCompletionsRequestRequestBody5Content*                                   | :heavy_check_mark:                                                                                                         | The contents of the tool message.                                                                                          |
| `toolCallId`                                                                                                               | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Tool call that this message is responding to.                                                                              |
| `cacheControl`                                                                                                             | [operations.CreateChatCompletionMessagesCacheControl](../../models/operations/createchatcompletionmessagescachecontrol.md) | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |