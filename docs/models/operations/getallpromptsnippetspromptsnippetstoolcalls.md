# GetAllPromptSnippetsPromptSnippetsToolCalls

## Example Usage

```typescript
import { GetAllPromptSnippetsPromptSnippetsToolCalls } from "@orq-ai/node/models/operations";

let value: GetAllPromptSnippetsPromptSnippetsToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                   | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `index`                                                                                                                                | *number*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `type`                                                                                                                                 | [operations.GetAllPromptSnippetsPromptSnippetsResponseType](../../models/operations/getallpromptsnippetspromptsnippetsresponsetype.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `function`                                                                                                                             | [operations.GetAllPromptSnippetsPromptSnippetsFunction](../../models/operations/getallpromptsnippetspromptsnippetsfunction.md)         | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |