# CreateCompletionData

## Example Usage

```typescript
import { CreateCompletionData } from "@orq-ai/node/models/operations";

let value: CreateCompletionData = {
  id: "<id>",
  choices: [
    {
      finishReason: "stop",
      index: 5949.57,
      text: "<value>",
    },
  ],
  model: "A4",
  object: "<value>",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | A unique identifier for the completion.                                                                                      |
| `choices`                                                                                                                    | [operations.CreateCompletionRouterCompletionsChoices](../../models/operations/createcompletionroutercompletionschoices.md)[] | :heavy_check_mark:                                                                                                           | The list of completion choices the model generated for the input prompt.                                                     |
| `created`                                                                                                                    | *operations.CreateCompletionCreated*                                                                                         | :heavy_minus_sign:                                                                                                           | The Unix timestamp (in seconds) of when the chat completion was created.                                                     |
| `model`                                                                                                                      | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The model used for the chat completion.                                                                                      |
| `systemFingerprint`                                                                                                          | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | This fingerprint represents the backend configuration that the model runs with.                                              |
| `object`                                                                                                                     | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The object type                                                                                                              |
| `usage`                                                                                                                      | [operations.CreateCompletionRouterCompletionsUsage](../../models/operations/createcompletionroutercompletionsusage.md)       | :heavy_minus_sign:                                                                                                           | Usage statistics for the completion request.                                                                                 |