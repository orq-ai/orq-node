# CreatePromptPromptsPromptConfig

A list of messages compatible with the openAI schema

## Example Usage

```typescript
import { CreatePromptPromptsPromptConfig } from "@orq-ai/node/models/operations";

let value: CreatePromptPromptsPromptConfig = {
  messages: [
    {
      role: "exception",
      content: [
        {
          type: "image_url",
          imageUrl: {
            url: "https://electric-onset.com",
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `stream`                                                                                                       | *boolean*                                                                                                      | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `model`                                                                                                        | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `modelDbId`                                                                                                    | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | The id of the resource                                                                                         |
| `modelType`                                                                                                    | [operations.CreatePromptPromptsModelType](../../models/operations/createpromptpromptsmodeltype.md)             | :heavy_minus_sign:                                                                                             | The type of the model                                                                                          |
| `modelParameters`                                                                                              | [operations.CreatePromptPromptsModelParameters](../../models/operations/createpromptpromptsmodelparameters.md) | :heavy_minus_sign:                                                                                             | Model Parameters: Not all parameters apply to every model                                                      |
| `provider`                                                                                                     | [operations.CreatePromptPromptsProvider](../../models/operations/createpromptpromptsprovider.md)               | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `integrationId`                                                                                                | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | The id of the resource                                                                                         |
| `version`                                                                                                      | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `messages`                                                                                                     | [operations.CreatePromptPromptsMessages](../../models/operations/createpromptpromptsmessages.md)[]             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |