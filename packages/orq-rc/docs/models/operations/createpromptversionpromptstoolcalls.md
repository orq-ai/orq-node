# CreatePromptVersionPromptsToolCalls

## Example Usage

```typescript
import { CreatePromptVersionPromptsToolCalls } from "@orq-ai/node/models/operations";

let value: CreatePromptVersionPromptsToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `index`                                                                                                        | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `type`                                                                                                         | [operations.CreatePromptVersionPromptsType](../../models/operations/createpromptversionpromptstype.md)         | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `function`                                                                                                     | [operations.CreatePromptVersionPromptsFunction](../../models/operations/createpromptversionpromptsfunction.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |