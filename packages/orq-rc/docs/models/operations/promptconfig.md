# ~~PromptConfig~~

[DEPRECATED]. Please use the `prompt` property instead.

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

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `stream`                                                                                         | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `model`                                                                                          | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `modelParameters`                                                                                | [operations.UpdatePromptModelParameters](../../models/operations/updatepromptmodelparameters.md) | :heavy_minus_sign:                                                                               | Model Parameters: Not all parameters apply to every model                                        |
| `provider`                                                                                       | [operations.Provider](../../models/operations/provider.md)                                       | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `version`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `messages`                                                                                       | [operations.UpdatePromptMessages](../../models/operations/updatepromptmessages.md)[]             | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `modelDbId`                                                                                      | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `modelType`                                                                                      | [operations.ModelType](../../models/operations/modeltype.md)                                     | :heavy_minus_sign:                                                                               | The modality of the model                                                                        |
| `isPrivate`                                                                                      | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |