# UpdatePromptPromptsResponseToolCalls

## Example Usage

```typescript
import { UpdatePromptPromptsResponseToolCalls } from "@orq-ai/node/models/operations";

let value: UpdatePromptPromptsResponseToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `index`                                                                                                          | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `type`                                                                                                           | [operations.UpdatePromptPromptsResponse200Type](../../models/operations/updatepromptpromptsresponse200type.md)   | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `function`                                                                                                       | [operations.UpdatePromptPromptsResponseFunction](../../models/operations/updatepromptpromptsresponsefunction.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |