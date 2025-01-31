# UpdatePromptSnippetToolCalls

## Example Usage

```typescript
import { UpdatePromptSnippetToolCalls } from "@orq-ai/node/models/operations";

let value: UpdatePromptSnippetToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `index`                                                                                          | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `type`                                                                                           | [operations.UpdatePromptSnippetType](../../models/operations/updatepromptsnippettype.md)         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `function`                                                                                       | [operations.UpdatePromptSnippetFunction](../../models/operations/updatepromptsnippetfunction.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |