# CreatePromptPromptsResponseToolCalls

## Example Usage

```typescript
import { CreatePromptPromptsResponseToolCalls } from "@orq-ai/node/models/operations";

let value: CreatePromptPromptsResponseToolCalls = {
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
| `type`                                                                                                           | [operations.CreatePromptPromptsResponse200Type](../../models/operations/createpromptpromptsresponse200type.md)   | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `function`                                                                                                       | [operations.CreatePromptPromptsResponseFunction](../../models/operations/createpromptpromptsresponsefunction.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |