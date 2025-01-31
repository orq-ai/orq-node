# FindOnePromptSnippetPromptSnippetsToolCalls

## Example Usage

```typescript
import { FindOnePromptSnippetPromptSnippetsToolCalls } from "@orq-ai/node/models/operations";

let value: FindOnePromptSnippetPromptSnippetsToolCalls = {
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
| `type`                                                                                                                                 | [operations.FindOnePromptSnippetPromptSnippetsResponseType](../../models/operations/findonepromptsnippetpromptsnippetsresponsetype.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `function`                                                                                                                             | [operations.FindOnePromptSnippetPromptSnippetsFunction](../../models/operations/findonepromptsnippetpromptsnippetsfunction.md)         | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |