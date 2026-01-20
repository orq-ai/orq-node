# CreatePromptToolChoicePrompts2

## Example Usage

```typescript
import { CreatePromptToolChoicePrompts2 } from "@orq-ai/node/models/operations";

let value: CreatePromptToolChoicePrompts2 = {
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [operations.CreatePromptToolChoicePromptsType](../../models/operations/createprompttoolchoicepromptstype.md)         | :heavy_minus_sign:                                                                                                   | The type of the tool. Currently, only function is supported.                                                         |
| `function`                                                                                                           | [operations.CreatePromptToolChoicePromptsFunction](../../models/operations/createprompttoolchoicepromptsfunction.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |