# UpdatePromptSnippetPromptSnippetsToolCalls

## Example Usage

```typescript
import { UpdatePromptSnippetPromptSnippetsToolCalls } from "@orq-ai/node/models/operations";

let value: UpdatePromptSnippetPromptSnippetsToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `index`                                                                                                                              | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `type`                                                                                                                               | [operations.UpdatePromptSnippetPromptSnippetsResponseType](../../models/operations/updatepromptsnippetpromptsnippetsresponsetype.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `function`                                                                                                                           | [operations.UpdatePromptSnippetPromptSnippetsFunction](../../models/operations/updatepromptsnippetpromptsnippetsfunction.md)         | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |