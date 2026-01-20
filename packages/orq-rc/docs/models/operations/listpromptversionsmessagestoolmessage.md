# ListPromptVersionsMessagesToolMessage

## Example Usage

```typescript
import { ListPromptVersionsMessagesToolMessage } from "@orq-ai/node/models/operations";

let value: ListPromptVersionsMessagesToolMessage = {
  role: "tool",
  content: [],
  toolCallId: "<id>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                 | *"tool"*                                                                                                               | :heavy_check_mark:                                                                                                     | The role of the messages author, in this case tool.                                                                    |
| `content`                                                                                                              | *operations.ListPromptVersionsMessagesPromptsResponse200Content*                                                       | :heavy_check_mark:                                                                                                     | The contents of the tool message.                                                                                      |
| `toolCallId`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Tool call that this message is responding to.                                                                          |
| `cacheControl`                                                                                                         | [operations.ListPromptVersionsMessagesCacheControl](../../models/operations/listpromptversionsmessagescachecontrol.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |