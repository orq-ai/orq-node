# FindOnePromptSnippetToolCalls

## Example Usage

```typescript
import { FindOnePromptSnippetToolCalls } from "@orq-ai/node/models/operations";

let value: FindOnePromptSnippetToolCalls = {
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
| `type`                                                                                                                 | [operations.FindOnePromptSnippetPromptSnippetsType](../../models/operations/findonepromptsnippetpromptsnippetstype.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `function`                                                                                                             | [operations.FindOnePromptSnippetFunction](../../models/operations/findonepromptsnippetfunction.md)                     | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |