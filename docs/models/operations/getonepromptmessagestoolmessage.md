# GetOnePromptMessagesToolMessage

## Example Usage

```typescript
import { GetOnePromptMessagesToolMessage } from "@orq-ai/node/models/operations";

let value: GetOnePromptMessagesToolMessage = {
  role: "tool",
  content: [],
  toolCallId: "<id>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                     | *"tool"*                                                                                                   | :heavy_check_mark:                                                                                         | The role of the messages author, in this case tool.                                                        |
| `content`                                                                                                  | *operations.GetOnePromptMessagesPromptsResponse200Content*                                                 | :heavy_check_mark:                                                                                         | The contents of the tool message.                                                                          |
| `toolCallId`                                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Tool call that this message is responding to.                                                              |
| `cacheControl`                                                                                             | [operations.GetOnePromptMessagesCacheControl](../../models/operations/getonepromptmessagescachecontrol.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |