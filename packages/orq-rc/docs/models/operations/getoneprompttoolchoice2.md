# GetOnePromptToolChoice2

## Example Usage

```typescript
import { GetOnePromptToolChoice2 } from "@orq-ai/node/models/operations";

let value: GetOnePromptToolChoice2 = {
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [operations.GetOnePromptToolChoiceType](../../models/operations/getoneprompttoolchoicetype.md)         | :heavy_minus_sign:                                                                                     | The type of the tool. Currently, only function is supported.                                           |
| `function`                                                                                             | [operations.GetOnePromptToolChoiceFunction](../../models/operations/getoneprompttoolchoicefunction.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |