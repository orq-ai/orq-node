# FindOnePromptSnippetResponseBodyToolCalls

## Example Usage

```typescript
import { FindOnePromptSnippetResponseBodyToolCalls } from "@orq-ai/node/models/operations";

let value: FindOnePromptSnippetResponseBodyToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                 | *string*                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `index`                                                                                                                                                              | *number*                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `type`                                                                                                                                                               | [operations.FindOnePromptSnippetResponseBodyPromptSnippetsResponse200Type](../../models/operations/findonepromptsnippetresponsebodypromptsnippetsresponse200type.md) | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `function`                                                                                                                                                           | [operations.FindOnePromptSnippetResponseBodyFunction](../../models/operations/findonepromptsnippetresponsebodyfunction.md)                                           | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |