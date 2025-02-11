# GetAllPromptSnippetsToolCalls

## Example Usage

```typescript
import { GetAllPromptSnippetsToolCalls } from "@orq-ai/node/models/operations";

let value: GetAllPromptSnippetsToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `index`                                                                                                                | *number*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `type`                                                                                                                 | [operations.GetAllPromptSnippetsPromptSnippetsType](../../models/operations/getallpromptsnippetspromptsnippetstype.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `function`                                                                                                             | [operations.GetAllPromptSnippetsFunction](../../models/operations/getallpromptsnippetsfunction.md)                     | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |