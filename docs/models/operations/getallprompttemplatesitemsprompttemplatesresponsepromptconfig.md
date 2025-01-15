# GetAllPromptTemplatesItemsPromptTemplatesResponsePromptConfig

## Example Usage

```typescript
import { GetAllPromptTemplatesItemsPromptTemplatesResponsePromptConfig } from "@orq-ai/node/models/operations";

let value: GetAllPromptTemplatesItemsPromptTemplatesResponsePromptConfig = {
  messages: [
    {
      role: "user",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `stream`                                                                                                                                                                   | *boolean*                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `model`                                                                                                                                                                    | *string*                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `modelDbId`                                                                                                                                                                | *string*                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                         | The id of the resource                                                                                                                                                     |
| `modelType`                                                                                                                                                                | [operations.GetAllPromptTemplatesItemsPromptTemplatesResponseModelType](../../models/operations/getallprompttemplatesitemsprompttemplatesresponsemodeltype.md)             | :heavy_minus_sign:                                                                                                                                                         | The type of the model                                                                                                                                                      |
| `modelParameters`                                                                                                                                                          | [operations.GetAllPromptTemplatesItemsPromptTemplatesResponseModelParameters](../../models/operations/getallprompttemplatesitemsprompttemplatesresponsemodelparameters.md) | :heavy_minus_sign:                                                                                                                                                         | Model Parameters: Not all parameters apply to every model                                                                                                                  |
| `provider`                                                                                                                                                                 | [operations.GetAllPromptTemplatesItemsPromptTemplatesResponseProvider](../../models/operations/getallprompttemplatesitemsprompttemplatesresponseprovider.md)               | :heavy_minus_sign:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `integrationId`                                                                                                                                                            | *string*                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                         | The id of the resource                                                                                                                                                     |
| `version`                                                                                                                                                                  | *string*                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `messages`                                                                                                                                                                 | [operations.GetAllPromptTemplatesItemsPromptTemplatesResponseMessages](../../models/operations/getallprompttemplatesitemsprompttemplatesresponsemessages.md)[]             | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |