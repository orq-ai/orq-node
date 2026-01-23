# MessageResponse

## Example Usage

```typescript
import { MessageResponse } from "@orq-ai/node/models/components";

let value: MessageResponse = {
  id: "msg_01kcpsnav10ehqgwmh86ghea1k",
  conversationId: "conv_01kcpsnaq3barznzh4ba1xm41s",
  createdAt: 1734789600000,
  createdById: "user_01jj1hdhn79xas7a01wb3hysdb",
  parts: [],
  role: "user",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                      | *string*                                                                                                  | :heavy_check_mark:                                                                                        | Unique message identifier with `msg_` prefix.                                                             | msg_01kcpsnav10ehqgwmh86ghea1k                                                                            |
| `conversationId`                                                                                          | *string*                                                                                                  | :heavy_check_mark:                                                                                        | Conversation identifier this message belongs to.                                                          | conv_01kcpsnaq3barznzh4ba1xm41s                                                                           |
| `createdAt`                                                                                               | *number*                                                                                                  | :heavy_check_mark:                                                                                        | Unix timestamp in milliseconds when the message was created.                                              | 1734789600000                                                                                             |
| `createdById`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | Identifier of the message author. User ID for user messages, "system" for assistant messages.             | user_01jj1hdhn79xas7a01wb3hysdb                                                                           |
| `parts`                                                                                                   | *components.PublicMessagePart*[]                                                                          | :heavy_check_mark:                                                                                        | Content parts composing the message. Supports multiple content types (text, images, files, tool results). |                                                                                                           |
| `role`                                                                                                    | [components.MessageResponseRole](../../models/components/messageresponserole.md)                          | :heavy_check_mark:                                                                                        | Message author role. `user` for end-user messages, `assistant` for AI-generated responses.                | user                                                                                                      |