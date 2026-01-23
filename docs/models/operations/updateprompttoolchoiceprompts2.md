# UpdatePromptToolChoicePrompts2

## Example Usage

```typescript
import { UpdatePromptToolChoicePrompts2 } from "@orq-ai/node/models/operations";

let value: UpdatePromptToolChoicePrompts2 = {
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [operations.UpdatePromptToolChoicePromptsType](../../models/operations/updateprompttoolchoicepromptstype.md)         | :heavy_minus_sign:                                                                                                   | The type of the tool. Currently, only function is supported.                                                         |
| `function`                                                                                                           | [operations.UpdatePromptToolChoicePromptsFunction](../../models/operations/updateprompttoolchoicepromptsfunction.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |