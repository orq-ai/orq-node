# FindOneByKeyPromptSnippetPromptConfig

A list of messages compatible with the openAI schema

## Example Usage

```typescript
import { FindOneByKeyPromptSnippetPromptConfig } from "@orq-ai/node/models/operations";

let value: FindOneByKeyPromptSnippetPromptConfig = {
  messages: [
    {
      role: "exception",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `stream`                                                                                                                   | *boolean*                                                                                                                  | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `model`                                                                                                                    | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `modelDbId`                                                                                                                | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The id of the resource                                                                                                     |
| `modelType`                                                                                                                | [operations.FindOneByKeyPromptSnippetModelType](../../models/operations/findonebykeypromptsnippetmodeltype.md)             | :heavy_minus_sign:                                                                                                         | The type of the model                                                                                                      |
| `modelParameters`                                                                                                          | [operations.FindOneByKeyPromptSnippetModelParameters](../../models/operations/findonebykeypromptsnippetmodelparameters.md) | :heavy_minus_sign:                                                                                                         | Model Parameters: Not all parameters apply to every model                                                                  |
| `provider`                                                                                                                 | [operations.FindOneByKeyPromptSnippetProvider](../../models/operations/findonebykeypromptsnippetprovider.md)               | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `integrationId`                                                                                                            | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The id of the resource                                                                                                     |
| `version`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `messages`                                                                                                                 | [operations.FindOneByKeyPromptSnippetMessages](../../models/operations/findonebykeypromptsnippetmessages.md)[]             | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |