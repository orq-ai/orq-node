# GetAllPromptsPromptsPromptConfig

A list of messages compatible with the openAI schema

## Example Usage

```typescript
import { GetAllPromptsPromptsPromptConfig } from "@orq-ai/node/models/operations";

let value: GetAllPromptsPromptsPromptConfig = {
  messages: [
    {
      role: "tool",
      content: [
        {
          type: "image_url",
          imageUrl: {
            url: "https://unwritten-silk.info",
          },
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
| `modelType`                                                                                                      | [operations.GetAllPromptsPromptsModelType](../../models/operations/getallpromptspromptsmodeltype.md)             | :heavy_minus_sign:                                                                                               | The type of the model                                                                                            |
| `modelParameters`                                                                                                | [operations.GetAllPromptsPromptsModelParameters](../../models/operations/getallpromptspromptsmodelparameters.md) | :heavy_minus_sign:                                                                                               | Model Parameters: Not all parameters apply to every model                                                        |
| `provider`                                                                                                       | [operations.GetAllPromptsPromptsProvider](../../models/operations/getallpromptspromptsprovider.md)               | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `integrationId`                                                                                                  | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The id of the resource                                                                                           |
| `version`                                                                                                        | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `messages`                                                                                                       | [operations.GetAllPromptsPromptsMessages](../../models/operations/getallpromptspromptsmessages.md)[]             | :heavy_check_mark:                                                                                               | N/A                                                                                                              |