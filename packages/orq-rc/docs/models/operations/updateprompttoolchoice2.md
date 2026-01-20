# UpdatePromptToolChoice2

## Example Usage

```typescript
import { UpdatePromptToolChoice2 } from "@orq-ai/node/models/operations";

let value: UpdatePromptToolChoice2 = {
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [operations.UpdatePromptToolChoiceType](../../models/operations/updateprompttoolchoicetype.md)         | :heavy_minus_sign:                                                                                     | The type of the tool. Currently, only function is supported.                                           |
| `function`                                                                                             | [operations.UpdatePromptToolChoiceFunction](../../models/operations/updateprompttoolchoicefunction.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |