# ~~UpdatePromptPromptConfig~~

[DEPRECATED] Use the `prompt` property instead. A list of messages compatible with the openAI schema.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { UpdatePromptPromptConfig } from "@orq-ai/node/models/operations";

let value: UpdatePromptPromptConfig = {
  messages: [],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `stream`                                                                                           | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `model`                                                                                            | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `modelDbId`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The id of the resource                                                                             |
| `modelType`                                                                                        | [operations.UpdatePromptModelType](../../models/operations/updatepromptmodeltype.md)               | :heavy_minus_sign:                                                                                 | The modality of the model                                                                          |
| `modelParameters`                                                                                  | [operations.UpdatePromptModelParameters](../../models/operations/updatepromptmodelparameters.md)   | :heavy_minus_sign:                                                                                 | Model Parameters: Not all parameters apply to every model                                          |
| `provider`                                                                                         | [operations.UpdatePromptProvider](../../models/operations/updatepromptprovider.md)                 | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `integrationId`                                                                                    | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The ID of the integration to use                                                                   |
| `version`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `messages`                                                                                         | [operations.UpdatePromptPromptsMessages](../../models/operations/updatepromptpromptsmessages.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |