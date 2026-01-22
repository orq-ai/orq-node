# CreateCompletionChoices

## Example Usage

```typescript
import { CreateCompletionChoices } from "@orq-ai/node/models/operations";

let value: CreateCompletionChoices = {
  finishReason: "stop",
  index: 2070.32,
  text: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `finishReason`                                                                                     | [operations.CreateCompletionFinishReason](../../models/operations/createcompletionfinishreason.md) | :heavy_check_mark:                                                                                 | The reason the model stopped generating tokens.                                                    |
| `index`                                                                                            | *number*                                                                                           | :heavy_check_mark:                                                                                 | The index of the choice in the list of choices.                                                    |
| `text`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |