# CreateChatCompletionMessagesToolCalls

## Example Usage

```typescript
import { CreateChatCompletionMessagesToolCalls } from "@orq-ai/node/models/operations";

let value: CreateChatCompletionMessagesToolCalls = {
  id: "<id>",
  type: "function",
  function: {},
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The ID of the tool call.                                                                                           |
| `type`                                                                                                             | [operations.CreateChatCompletionMessagesType](../../models/operations/createchatcompletionmessagestype.md)         | :heavy_check_mark:                                                                                                 | The type of the tool. Currently, only `function` is supported.                                                     |
| `function`                                                                                                         | [operations.CreateChatCompletionMessagesFunction](../../models/operations/createchatcompletionmessagesfunction.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |