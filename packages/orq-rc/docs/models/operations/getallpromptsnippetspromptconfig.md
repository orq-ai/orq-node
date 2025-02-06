# GetAllPromptSnippetsPromptConfig

A list of messages compatible with the openAI schema

## Example Usage

```typescript
import { GetAllPromptSnippetsPromptConfig } from "@orq-ai/node/models/operations";

let value: GetAllPromptSnippetsPromptConfig = {
  messages: [
    {
      role: "user",
      content: [
        {
          type: "text",
          text: "<value>",
        },
      ],
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
| `modelType`                                                                                                      | [operations.GetAllPromptSnippetsModelType](../../models/operations/getallpromptsnippetsmodeltype.md)             | :heavy_minus_sign:                                                                                               | The type of the model                                                                                            |
| `modelParameters`                                                                                                | [operations.GetAllPromptSnippetsModelParameters](../../models/operations/getallpromptsnippetsmodelparameters.md) | :heavy_minus_sign:                                                                                               | Model Parameters: Not all parameters apply to every model                                                        |
| `provider`                                                                                                       | [operations.GetAllPromptSnippetsProvider](../../models/operations/getallpromptsnippetsprovider.md)               | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `integrationId`                                                                                                  | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The id of the resource                                                                                           |
| `version`                                                                                                        | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `messages`                                                                                                       | [operations.GetAllPromptSnippetsMessages](../../models/operations/getallpromptsnippetsmessages.md)[]             | :heavy_check_mark:                                                                                               | N/A                                                                                                              |