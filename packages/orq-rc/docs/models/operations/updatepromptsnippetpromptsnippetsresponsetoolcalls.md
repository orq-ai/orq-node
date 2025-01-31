# UpdatePromptSnippetPromptSnippetsResponseToolCalls

## Example Usage

```typescript
import { UpdatePromptSnippetPromptSnippetsResponseToolCalls } from "@orq-ai/node/models/operations";

let value: UpdatePromptSnippetPromptSnippetsResponseToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                         | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `index`                                                                                                                                      | *number*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `type`                                                                                                                                       | [operations.UpdatePromptSnippetPromptSnippetsResponse200Type](../../models/operations/updatepromptsnippetpromptsnippetsresponse200type.md)   | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `function`                                                                                                                                   | [operations.UpdatePromptSnippetPromptSnippetsResponseFunction](../../models/operations/updatepromptsnippetpromptsnippetsresponsefunction.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |