# ListPromptVersionsToolCalls

## Example Usage

```typescript
import { ListPromptVersionsToolCalls } from "@orq-ai/node/models/operations";

let value: ListPromptVersionsToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                       | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `index`                                                                                                                    | *number*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `type`                                                                                                                     | [operations.ListPromptVersionsPromptsResponse200Type](../../models/operations/listpromptversionspromptsresponse200type.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `function`                                                                                                                 | [operations.ListPromptVersionsFunction](../../models/operations/listpromptversionsfunction.md)                             | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |