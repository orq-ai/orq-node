# PostV2ProxyCompletionsData

## Example Usage

```typescript
import { PostV2ProxyCompletionsData } from "@orq-ai/node/models/operations";

let value: PostV2ProxyCompletionsData = {
  id: "<id>",
  choices: [
    {
      finishReason: "stop",
      index: 4113.95,
      text: "<value>",
    },
  ],
  model: "Charger",
  object: "<value>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | A unique identifier for the completion.                                                                          |
| `choices`                                                                                                        | [operations.PostV2ProxyCompletionsProxyChoices](../../models/operations/postv2proxycompletionsproxychoices.md)[] | :heavy_check_mark:                                                                                               | The list of completion choices the model generated for the input prompt.                                         |
| `created`                                                                                                        | *operations.PostV2ProxyCompletionsCreated*                                                                       | :heavy_minus_sign:                                                                                               | The Unix timestamp (in seconds) of when the chat completion was created.                                         |
| `model`                                                                                                          | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The model used for the chat completion.                                                                          |
| `systemFingerprint`                                                                                              | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | This fingerprint represents the backend configuration that the model runs with.                                  |
| `object`                                                                                                         | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The object type                                                                                                  |
| `usage`                                                                                                          | [operations.PostV2ProxyCompletionsProxyUsage](../../models/operations/postv2proxycompletionsproxyusage.md)       | :heavy_minus_sign:                                                                                               | Usage statistics for the completion request.                                                                     |