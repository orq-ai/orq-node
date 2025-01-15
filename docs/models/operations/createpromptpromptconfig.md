# CreatePromptPromptConfig

## Example Usage

```typescript
import { CreatePromptPromptConfig } from "@orq-ai/node/models/operations";

let value: CreatePromptPromptConfig = {
  messages: [
    {
      role: "exception",
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
| `modelType`                                                                                        | [operations.CreatePromptModelType](../../models/operations/createpromptmodeltype.md)               | :heavy_minus_sign:                                                                                 | The type of the model                                                                              |
| `modelParameters`                                                                                  | [operations.CreatePromptModelParameters](../../models/operations/createpromptmodelparameters.md)   | :heavy_minus_sign:                                                                                 | Model Parameters: Not all parameters apply to every model                                          |
| `provider`                                                                                         | [operations.CreatePromptProvider](../../models/operations/createpromptprovider.md)                 | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `integrationId`                                                                                    | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The id of the resource                                                                             |
| `version`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `messages`                                                                                         | [operations.CreatePromptPromptsMessages](../../models/operations/createpromptpromptsmessages.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |