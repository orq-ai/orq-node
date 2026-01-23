# UserMessageRequest

The user message to send to the model

## Example Usage

```typescript
import { UserMessageRequest } from "@orq-ai/node/models/components";

let value: UserMessageRequest = {
  role: "user",
  parts: [
    {
      kind: "text",
      text: "Hello!",
    },
  ],
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `messageId`                                                                                 | *string*                                                                                    | :heavy_minus_sign:                                                                          | Optional message ID in ULID format                                                          |                                                                                             |
| `role`                                                                                      | [components.UserMessageRequestRole](../../models/components/usermessagerequestrole.md)      | :heavy_check_mark:                                                                          | Role indicating this message is from a user                                                 | user                                                                                        |
| `parts`                                                                                     | *components.UserMessageRequestPublicMessagePart*[]                                          | :heavy_check_mark:                                                                          | Array of message parts. User messages can contain text, file, tool_result, and error parts. | [<br/>{<br/>"kind": "text",<br/>"text": "Hello!"<br/>}<br/>]                                |