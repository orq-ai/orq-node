# UpdatePromptPromptConfig

A list of messages compatible with the openAI schema

## Example Usage

```typescript
import { UpdatePromptPromptConfig } from "@orq-ai/node/models/operations";

let value: UpdatePromptPromptConfig = {
  messages: [
    {
      role: "expected_output",
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
| `modelType`                                                                                        | [operations.UpdatePromptModelType](../../models/operations/updatepromptmodeltype.md)               | :heavy_minus_sign:                                                                                 | The type of the model                                                                              |
| `modelParameters`                                                                                  | [operations.UpdatePromptModelParameters](../../models/operations/updatepromptmodelparameters.md)   | :heavy_minus_sign:                                                                                 | Model Parameters: Not all parameters apply to every model                                          |
| `provider`                                                                                         | [operations.UpdatePromptProvider](../../models/operations/updatepromptprovider.md)                 | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `integrationId`                                                                                    | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The id of the resource                                                                             |
| `version`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `messages`                                                                                         | [operations.UpdatePromptPromptsMessages](../../models/operations/updatepromptpromptsmessages.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |