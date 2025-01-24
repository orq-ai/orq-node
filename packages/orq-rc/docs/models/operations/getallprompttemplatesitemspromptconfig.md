# GetAllPromptTemplatesItemsPromptConfig

## Example Usage

```typescript
import { GetAllPromptTemplatesItemsPromptConfig } from "@orq-ai/node/models/operations";

let value: GetAllPromptTemplatesItemsPromptConfig = {
  messages: [
    {
      role: "tool",
      content: [
        {
          type: "image_url",
          imageUrl: {
            url: "https://realistic-operating.name/",
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
| `modelType`                                                                                                                  | [operations.GetAllPromptTemplatesItemsModelType](../../models/operations/getallprompttemplatesitemsmodeltype.md)             | :heavy_minus_sign:                                                                                                           | The type of the model                                                                                                        |
| `modelParameters`                                                                                                            | [operations.GetAllPromptTemplatesItemsModelParameters](../../models/operations/getallprompttemplatesitemsmodelparameters.md) | :heavy_minus_sign:                                                                                                           | Model Parameters: Not all parameters apply to every model                                                                    |
| `provider`                                                                                                                   | [operations.GetAllPromptTemplatesItemsProvider](../../models/operations/getallprompttemplatesitemsprovider.md)               | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `integrationId`                                                                                                              | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The id of the resource                                                                                                       |
| `version`                                                                                                                    | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `messages`                                                                                                                   | [operations.GetAllPromptTemplatesItemsMessages](../../models/operations/getallprompttemplatesitemsmessages.md)[]             | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |