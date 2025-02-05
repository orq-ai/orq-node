# FindOnePromptSnippetPromptConfig

A list of messages compatible with the openAI schema

## Example Usage

```typescript
import { FindOnePromptSnippetPromptConfig } from "@orq-ai/node/models/operations";

let value: FindOnePromptSnippetPromptConfig = {
  messages: [
    {
      role: "user",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `stream`                                                                                                         | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `model`                                                                                                          | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `modelDbId`                                                                                                      | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The id of the resource                                                                                           |
| `modelType`                                                                                                      | [operations.FindOnePromptSnippetModelType](../../models/operations/findonepromptsnippetmodeltype.md)             | :heavy_minus_sign:                                                                                               | The type of the model                                                                                            |
| `modelParameters`                                                                                                | [operations.FindOnePromptSnippetModelParameters](../../models/operations/findonepromptsnippetmodelparameters.md) | :heavy_minus_sign:                                                                                               | Model Parameters: Not all parameters apply to every model                                                        |
| `provider`                                                                                                       | [operations.FindOnePromptSnippetProvider](../../models/operations/findonepromptsnippetprovider.md)               | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `integrationId`                                                                                                  | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The id of the resource                                                                                           |
| `version`                                                                                                        | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `messages`                                                                                                       | [operations.FindOnePromptSnippetMessages](../../models/operations/findonepromptsnippetmessages.md)[]             | :heavy_check_mark:                                                                                               | N/A                                                                                                              |