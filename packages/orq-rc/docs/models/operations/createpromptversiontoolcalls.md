# CreatePromptVersionToolCalls

## Example Usage

```typescript
import { CreatePromptVersionToolCalls } from "@orq-ai/node/models/operations";

let value: CreatePromptVersionToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `index`                                                                                          | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `type`                                                                                           | [operations.CreatePromptVersionType](../../models/operations/createpromptversiontype.md)         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `function`                                                                                       | [operations.CreatePromptVersionFunction](../../models/operations/createpromptversionfunction.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |