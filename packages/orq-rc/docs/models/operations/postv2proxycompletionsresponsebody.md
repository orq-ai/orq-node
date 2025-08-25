# PostV2ProxyCompletionsResponseBody

Represents a completion response from the API.

## Example Usage

```typescript
import { PostV2ProxyCompletionsResponseBody } from "@orq-ai/node/models/operations";

let value: PostV2ProxyCompletionsResponseBody = {
  id: "<id>",
  choices: [],
  model: "Model S",
  object: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | A unique identifier for the completion.                                                                |
| `choices`                                                                                              | [operations.PostV2ProxyCompletionsChoices](../../models/operations/postv2proxycompletionschoices.md)[] | :heavy_check_mark:                                                                                     | The list of completion choices the model generated for the input prompt.                               |
| `created`                                                                                              | *operations.Created*                                                                                   | :heavy_minus_sign:                                                                                     | The Unix timestamp (in seconds) of when the chat completion was created.                               |
| `model`                                                                                                | *string*                                                                                               | :heavy_check_mark:                                                                                     | The model used for the chat completion.                                                                |
| `systemFingerprint`                                                                                    | *string*                                                                                               | :heavy_minus_sign:                                                                                     | This fingerprint represents the backend configuration that the model runs with.                        |
| `object`                                                                                               | *string*                                                                                               | :heavy_check_mark:                                                                                     | The object type                                                                                        |
| `usage`                                                                                                | [operations.PostV2ProxyCompletionsUsage](../../models/operations/postv2proxycompletionsusage.md)       | :heavy_minus_sign:                                                                                     | Usage statistics for the completion request.                                                           |