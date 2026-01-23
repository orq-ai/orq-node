# ~~PromptConfig~~

[DEPRECATED] Use the `prompt` property instead. A list of messages compatible with the openAI schema.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { PromptConfig } from "@orq-ai/node/models/operations";

let value: PromptConfig = {
  messages: [
    {
      role: "user",
      content: null,
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
| `modelType`                                                                                        | [operations.ModelType](../../models/operations/modeltype.md)                                       | :heavy_minus_sign:                                                                                 | The modality of the model                                                                          |
| `modelParameters`                                                                                  | [operations.ModelParameters](../../models/operations/modelparameters.md)                           | :heavy_minus_sign:                                                                                 | Model Parameters: Not all parameters apply to every model                                          |
| `provider`                                                                                         | [operations.CreatePromptProvider](../../models/operations/createpromptprovider.md)                 | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `integrationId`                                                                                    | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The ID of the integration to use                                                                   |
| `version`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `messages`                                                                                         | [operations.CreatePromptPromptsMessages](../../models/operations/createpromptpromptsmessages.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |