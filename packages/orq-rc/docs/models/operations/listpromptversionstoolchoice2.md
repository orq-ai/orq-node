# ListPromptVersionsToolChoice2

## Example Usage

```typescript
import { ListPromptVersionsToolChoice2 } from "@orq-ai/node/models/operations";

let value: ListPromptVersionsToolChoice2 = {
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [operations.ListPromptVersionsToolChoiceType](../../models/operations/listpromptversionstoolchoicetype.md)         | :heavy_minus_sign:                                                                                                 | The type of the tool. Currently, only function is supported.                                                       |
| `function`                                                                                                         | [operations.ListPromptVersionsToolChoiceFunction](../../models/operations/listpromptversionstoolchoicefunction.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |