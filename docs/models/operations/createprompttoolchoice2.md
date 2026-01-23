# CreatePromptToolChoice2

## Example Usage

```typescript
import { CreatePromptToolChoice2 } from "@orq-ai/node/models/operations";

let value: CreatePromptToolChoice2 = {
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [operations.CreatePromptToolChoiceType](../../models/operations/createprompttoolchoicetype.md)         | :heavy_minus_sign:                                                                                     | The type of the tool. Currently, only function is supported.                                           |
| `function`                                                                                             | [operations.CreatePromptToolChoiceFunction](../../models/operations/createprompttoolchoicefunction.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |