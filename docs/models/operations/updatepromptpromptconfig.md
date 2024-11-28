# UpdatePromptPromptConfig

## Example Usage

```typescript
import { UpdatePromptPromptConfig } from "@orq-ai/node/models/operations";

let value: UpdatePromptPromptConfig = {
  messages: [
    {
      role: "tool",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `stream`                                                                                         | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `model`                                                                                          | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `modelType`                                                                                      | [operations.UpdatePromptModelType](../../models/operations/updatepromptmodeltype.md)             | :heavy_minus_sign:                                                                               | The type of the model                                                                            |
| `modelParameters`                                                                                | [operations.UpdatePromptModelParameters](../../models/operations/updatepromptmodelparameters.md) | :heavy_minus_sign:                                                                               | Model Parameters: Not all parameters apply to every model                                        |
| `provider`                                                                                       | [operations.UpdatePromptProvider](../../models/operations/updatepromptprovider.md)               | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `version`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `messages`                                                                                       | [operations.UpdatePromptMessages](../../models/operations/updatepromptmessages.md)[]             | :heavy_check_mark:                                                                               | N/A                                                                                              |