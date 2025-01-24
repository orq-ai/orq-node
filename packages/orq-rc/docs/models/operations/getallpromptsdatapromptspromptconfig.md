# GetAllPromptsDataPromptsPromptConfig

## Example Usage

```typescript
import { GetAllPromptsDataPromptsPromptConfig } from "@orq-ai/node/models/operations";

let value: GetAllPromptsDataPromptsPromptConfig = {
  messages: [
    {
      role: "correction",
      content: [
        {
          type: "image_url",
          imageUrl: {
            url: "https://infatuated-hope.net",
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `stream`                                                                                                                 | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `model`                                                                                                                  | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `modelDbId`                                                                                                              | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The id of the resource                                                                                                   |
| `modelType`                                                                                                              | [operations.GetAllPromptsDataPromptsModelType](../../models/operations/getallpromptsdatapromptsmodeltype.md)             | :heavy_minus_sign:                                                                                                       | The type of the model                                                                                                    |
| `modelParameters`                                                                                                        | [operations.GetAllPromptsDataPromptsModelParameters](../../models/operations/getallpromptsdatapromptsmodelparameters.md) | :heavy_minus_sign:                                                                                                       | Model Parameters: Not all parameters apply to every model                                                                |
| `provider`                                                                                                               | [operations.GetAllPromptsDataPromptsProvider](../../models/operations/getallpromptsdatapromptsprovider.md)               | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `integrationId`                                                                                                          | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The id of the resource                                                                                                   |
| `version`                                                                                                                | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `messages`                                                                                                               | [operations.GetAllPromptsDataPromptsMessages](../../models/operations/getallpromptsdatapromptsmessages.md)[]             | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |