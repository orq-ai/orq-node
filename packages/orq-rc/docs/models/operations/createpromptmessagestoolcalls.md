# CreatePromptMessagesToolCalls

## Example Usage

```typescript
import { CreatePromptMessagesToolCalls } from "@orq-ai/node/models/operations";

let value: CreatePromptMessagesToolCalls = {
  id: "<id>",
  type: "function",
  function: {},
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID of the tool call.                                                                           |
| `type`                                                                                             | [operations.CreatePromptMessagesType](../../models/operations/createpromptmessagestype.md)         | :heavy_check_mark:                                                                                 | The type of the tool. Currently, only `function` is supported.                                     |
| `function`                                                                                         | [operations.CreatePromptMessagesFunction](../../models/operations/createpromptmessagesfunction.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |