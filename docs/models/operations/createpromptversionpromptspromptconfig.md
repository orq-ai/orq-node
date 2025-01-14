# CreatePromptVersionPromptsPromptConfig

## Example Usage

```typescript
import { CreatePromptVersionPromptsPromptConfig } from "@orq-ai/node/models/operations";

let value: CreatePromptVersionPromptsPromptConfig = {
  messages: [
    {
      role: "user",
      content: [
        {
          type: "image_url",
          imageUrl: {
            url: "https://tattered-flint.org/",
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `stream`                                                                                                                     | *boolean*                                                                                                                    | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `model`                                                                                                                      | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `modelDbId`                                                                                                                  | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The id of the resource                                                                                                       |
| `modelType`                                                                                                                  | [operations.CreatePromptVersionPromptsModelType](../../models/operations/createpromptversionpromptsmodeltype.md)             | :heavy_minus_sign:                                                                                                           | The type of the model                                                                                                        |
| `modelParameters`                                                                                                            | [operations.CreatePromptVersionPromptsModelParameters](../../models/operations/createpromptversionpromptsmodelparameters.md) | :heavy_minus_sign:                                                                                                           | Model Parameters: Not all parameters apply to every model                                                                    |
| `provider`                                                                                                                   | [operations.CreatePromptVersionPromptsProvider](../../models/operations/createpromptversionpromptsprovider.md)               | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `integrationId`                                                                                                              | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The id of the resource                                                                                                       |
| `version`                                                                                                                    | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `messages`                                                                                                                   | [operations.CreatePromptVersionPromptsMessages](../../models/operations/createpromptversionpromptsmessages.md)[]             | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |