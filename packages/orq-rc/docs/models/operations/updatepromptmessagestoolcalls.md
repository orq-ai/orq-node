# UpdatePromptMessagesToolCalls

## Example Usage

```typescript
import { UpdatePromptMessagesToolCalls } from "@orq-ai/node/models/operations";

let value: UpdatePromptMessagesToolCalls = {
  id: "<id>",
  type: "function",
  function: {},
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID of the tool call.                                                                           |
| `type`                                                                                             | [operations.UpdatePromptMessagesType](../../models/operations/updatepromptmessagestype.md)         | :heavy_check_mark:                                                                                 | The type of the tool. Currently, only `function` is supported.                                     |
| `function`                                                                                         | [operations.UpdatePromptMessagesFunction](../../models/operations/updatepromptmessagesfunction.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |