# GetPromptVersionMessagesToolMessage

## Example Usage

```typescript
import { GetPromptVersionMessagesToolMessage } from "@orq-ai/node/models/operations";

let value: GetPromptVersionMessagesToolMessage = {
  role: "tool",
  content: [],
  toolCallId: "<id>",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                             | *"tool"*                                                                                                           | :heavy_check_mark:                                                                                                 | The role of the messages author, in this case tool.                                                                |
| `content`                                                                                                          | *operations.GetPromptVersionMessagesPromptsResponse200Content*                                                     | :heavy_check_mark:                                                                                                 | The contents of the tool message.                                                                                  |
| `toolCallId`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Tool call that this message is responding to.                                                                      |
| `cacheControl`                                                                                                     | [operations.GetPromptVersionMessagesCacheControl](../../models/operations/getpromptversionmessagescachecontrol.md) | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |