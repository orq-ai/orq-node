# FindOneByKeyPromptSnippetToolCalls

## Example Usage

```typescript
import { FindOneByKeyPromptSnippetToolCalls } from "@orq-ai/node/models/operations";

let value: FindOneByKeyPromptSnippetToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                             | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `index`                                                                                                                          | *number*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `type`                                                                                                                           | [operations.FindOneByKeyPromptSnippetPromptSnippetsType](../../models/operations/findonebykeypromptsnippetpromptsnippetstype.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `function`                                                                                                                       | [operations.FindOneByKeyPromptSnippetFunction](../../models/operations/findonebykeypromptsnippetfunction.md)                     | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |