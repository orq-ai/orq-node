# GetOnePromptPromptConfig

A list of messages compatible with the openAI schema

## Example Usage

```typescript
import { GetOnePromptPromptConfig } from "@orq-ai/node/models/operations";

let value: GetOnePromptPromptConfig = {
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
| `modelDbId`                                                                                      | *string*                                                                                         | :heavy_minus_sign:                                                                               | The id of the resource                                                                           |
| `modelType`                                                                                      | [operations.GetOnePromptModelType](../../models/operations/getonepromptmodeltype.md)             | :heavy_minus_sign:                                                                               | The type of the model                                                                            |
| `modelParameters`                                                                                | [operations.GetOnePromptModelParameters](../../models/operations/getonepromptmodelparameters.md) | :heavy_minus_sign:                                                                               | Model Parameters: Not all parameters apply to every model                                        |
| `provider`                                                                                       | [operations.GetOnePromptProvider](../../models/operations/getonepromptprovider.md)               | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `integrationId`                                                                                  | *string*                                                                                         | :heavy_minus_sign:                                                                               | The id of the resource                                                                           |
| `version`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `messages`                                                                                       | [operations.GetOnePromptMessages](../../models/operations/getonepromptmessages.md)[]             | :heavy_check_mark:                                                                               | N/A                                                                                              |