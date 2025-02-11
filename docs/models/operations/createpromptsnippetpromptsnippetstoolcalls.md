# CreatePromptSnippetPromptSnippetsToolCalls

## Example Usage

```typescript
import { CreatePromptSnippetPromptSnippetsToolCalls } from "@orq-ai/node/models/operations";

let value: CreatePromptSnippetPromptSnippetsToolCalls = {
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
| `type`                                                                                                                               | [operations.CreatePromptSnippetPromptSnippetsResponseType](../../models/operations/createpromptsnippetpromptsnippetsresponsetype.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `function`                                                                                                                           | [operations.CreatePromptSnippetPromptSnippetsFunction](../../models/operations/createpromptsnippetpromptsnippetsfunction.md)         | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |