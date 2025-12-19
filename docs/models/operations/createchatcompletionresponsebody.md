# CreateChatCompletionResponseBody

Represents a chat completion response returned by model, based on the provided input.

## Example Usage

```typescript
import { CreateChatCompletionResponseBody } from "@orq-ai/node/models/operations";

let value: CreateChatCompletionResponseBody = {
  id: "<id>",
  choices: [
    {
      finishReason: "content_filter",
      message: {},
    },
  ],
  created: 4400.92,
  model: "Accord",
  object: "chat.completion",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | A unique identifier for the chat completion.                                                       |
| `choices`                                                                                          | [operations.CreateChatCompletionChoices](../../models/operations/createchatcompletionchoices.md)[] | :heavy_check_mark:                                                                                 | A list of chat completion choices. Can be more than one if n is greater than 1.                    |
| `created`                                                                                          | *number*                                                                                           | :heavy_check_mark:                                                                                 | The Unix timestamp (in seconds) of when the chat completion was created.                           |
| `model`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | The model used for the chat completion.                                                            |
| `systemFingerprint`                                                                                | *string*                                                                                           | :heavy_minus_sign:                                                                                 | This fingerprint represents the backend configuration that the model runs with.                    |
| `usage`                                                                                            | [operations.CreateChatCompletionUsage](../../models/operations/createchatcompletionusage.md)       | :heavy_minus_sign:                                                                                 | Usage statistics for the completion request.                                                       |
| `object`                                                                                           | [operations.CreateChatCompletionObject](../../models/operations/createchatcompletionobject.md)     | :heavy_check_mark:                                                                                 | N/A                                                                                                |