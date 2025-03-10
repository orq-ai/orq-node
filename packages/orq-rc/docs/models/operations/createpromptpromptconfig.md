# CreatePromptPromptConfig

A list of messages compatible with the openAI schema

## Example Usage

```typescript
import { CreatePromptPromptConfig } from "@orq-ai/node/models/operations";

let value: CreatePromptPromptConfig = {
  messages: [
    {
      role: "correction",
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

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `stream`                                                                                         | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `model`                                                                                          | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `modelType`                                                                                      | [operations.CreatePromptModelType](../../models/operations/createpromptmodeltype.md)             | :heavy_minus_sign:                                                                               | The type of the model                                                                            |
| `modelParameters`                                                                                | [operations.CreatePromptModelParameters](../../models/operations/createpromptmodelparameters.md) | :heavy_minus_sign:                                                                               | Model Parameters: Not all parameters apply to every model                                        |
| `provider`                                                                                       | [operations.CreatePromptProvider](../../models/operations/createpromptprovider.md)               | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `version`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `messages`                                                                                       | [operations.CreatePromptMessages](../../models/operations/createpromptmessages.md)[]             | :heavy_check_mark:                                                                               | N/A                                                                                              |