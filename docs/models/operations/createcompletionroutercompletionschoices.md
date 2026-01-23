# CreateCompletionRouterCompletionsChoices

## Example Usage

```typescript
import { CreateCompletionRouterCompletionsChoices } from "@orq-ai/node/models/operations";

let value: CreateCompletionRouterCompletionsChoices = {
  finishReason: "stop",
  index: 2088.89,
  text: "<value>",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `finishReason`                                                                                                                       | [operations.CreateCompletionRouterCompletionsFinishReason](../../models/operations/createcompletionroutercompletionsfinishreason.md) | :heavy_check_mark:                                                                                                                   | The reason the model stopped generating tokens.                                                                                      |
| `index`                                                                                                                              | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The index of the choice in the list of choices.                                                                                      |
| `text`                                                                                                                               | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |