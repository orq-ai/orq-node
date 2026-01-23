# GetAllPromptsToolChoice2

## Example Usage

```typescript
import { GetAllPromptsToolChoice2 } from "@orq-ai/node/models/operations";

let value: GetAllPromptsToolChoice2 = {
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [operations.GetAllPromptsToolChoiceType](../../models/operations/getallpromptstoolchoicetype.md)         | :heavy_minus_sign:                                                                                       | The type of the tool. Currently, only function is supported.                                             |
| `function`                                                                                               | [operations.GetAllPromptsToolChoiceFunction](../../models/operations/getallpromptstoolchoicefunction.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |