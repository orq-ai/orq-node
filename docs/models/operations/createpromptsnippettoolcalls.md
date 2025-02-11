# CreatePromptSnippetToolCalls

## Example Usage

```typescript
import { CreatePromptSnippetToolCalls } from "@orq-ai/node/models/operations";

let value: CreatePromptSnippetToolCalls = {
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
| `type`                                                                                           | [operations.CreatePromptSnippetType](../../models/operations/createpromptsnippettype.md)         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `function`                                                                                       | [operations.CreatePromptSnippetFunction](../../models/operations/createpromptsnippetfunction.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |