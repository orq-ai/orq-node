# GetAllPromptsItemsPromptConfig

## Example Usage

```typescript
import { GetAllPromptsItemsPromptConfig } from "@orq-ai/node/models/operations";

let value: GetAllPromptsItemsPromptConfig = {
  messages: [
    {
      role: "assistant",
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

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `stream`                                                                                                     | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `model`                                                                                                      | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `modelDbId`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The id of the resource                                                                                       |
| `modelType`                                                                                                  | [operations.GetAllPromptsItemsModelType](../../models/operations/getallpromptsitemsmodeltype.md)             | :heavy_minus_sign:                                                                                           | The type of the model                                                                                        |
| `modelParameters`                                                                                            | [operations.GetAllPromptsItemsModelParameters](../../models/operations/getallpromptsitemsmodelparameters.md) | :heavy_minus_sign:                                                                                           | Model Parameters: Not all parameters apply to every model                                                    |
| `provider`                                                                                                   | [operations.GetAllPromptsItemsProvider](../../models/operations/getallpromptsitemsprovider.md)               | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `integrationId`                                                                                              | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The id of the resource                                                                                       |
| `version`                                                                                                    | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `messages`                                                                                                   | [operations.GetAllPromptsItemsMessages](../../models/operations/getallpromptsitemsmessages.md)[]             | :heavy_check_mark:                                                                                           | N/A                                                                                                          |