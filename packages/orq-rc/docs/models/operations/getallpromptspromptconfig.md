# GetAllPromptsPromptConfig

A list of messages compatible with the openAI schema

## Example Usage

```typescript
import { GetAllPromptsPromptConfig } from "@orq-ai/node/models/operations";

let value: GetAllPromptsPromptConfig = {
  messages: [
    {
      role: "tool",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `stream`                                                                                           | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `model`                                                                                            | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `modelDbId`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The id of the resource                                                                             |
| `modelType`                                                                                        | [operations.GetAllPromptsModelType](../../models/operations/getallpromptsmodeltype.md)             | :heavy_minus_sign:                                                                                 | The modality of the model                                                                          |
| `modelParameters`                                                                                  | [operations.GetAllPromptsModelParameters](../../models/operations/getallpromptsmodelparameters.md) | :heavy_minus_sign:                                                                                 | Model Parameters: Not all parameters apply to every model                                          |
| `provider`                                                                                         | [operations.GetAllPromptsProvider](../../models/operations/getallpromptsprovider.md)               | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `integrationId`                                                                                    | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The id of the resource                                                                             |
| `version`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `messages`                                                                                         | [operations.GetAllPromptsMessages](../../models/operations/getallpromptsmessages.md)[]             | :heavy_check_mark:                                                                                 | N/A                                                                                                |