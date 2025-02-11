# UpdatePromptPromptsToolCalls

## Example Usage

```typescript
import { UpdatePromptPromptsToolCalls } from "@orq-ai/node/models/operations";

let value: UpdatePromptPromptsToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `index`                                                                                                  | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `type`                                                                                                   | [operations.UpdatePromptPromptsResponseType](../../models/operations/updatepromptpromptsresponsetype.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `function`                                                                                               | [operations.UpdatePromptPromptsFunction](../../models/operations/updatepromptpromptsfunction.md)         | :heavy_check_mark:                                                                                       | N/A                                                                                                      |