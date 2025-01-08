# GetAllPromptsDataPromptConfig

## Example Usage

```typescript
import { GetAllPromptsDataPromptConfig } from "@orq-ai/node/models/operations";

let value: GetAllPromptsDataPromptConfig = {
  messages: [
    {
      role: "system",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `stream`                                                                                                   | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `model`                                                                                                    | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `modelDbId`                                                                                                | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The id of the resource                                                                                     |
| `modelType`                                                                                                | [operations.GetAllPromptsDataModelType](../../models/operations/getallpromptsdatamodeltype.md)             | :heavy_minus_sign:                                                                                         | The type of the model                                                                                      |
| `modelParameters`                                                                                          | [operations.GetAllPromptsDataModelParameters](../../models/operations/getallpromptsdatamodelparameters.md) | :heavy_minus_sign:                                                                                         | Model Parameters: Not all parameters apply to every model                                                  |
| `provider`                                                                                                 | [operations.GetAllPromptsDataProvider](../../models/operations/getallpromptsdataprovider.md)               | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `integrationId`                                                                                            | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The id of the resource                                                                                     |
| `version`                                                                                                  | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `messages`                                                                                                 | [operations.GetAllPromptsDataMessages](../../models/operations/getallpromptsdatamessages.md)[]             | :heavy_check_mark:                                                                                         | N/A                                                                                                        |