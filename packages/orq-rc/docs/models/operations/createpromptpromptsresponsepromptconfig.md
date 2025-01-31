# CreatePromptPromptsResponsePromptConfig

A list of messages compatible with the openAI schema

## Example Usage

```typescript
import { CreatePromptPromptsResponsePromptConfig } from "@orq-ai/node/models/operations";

let value: CreatePromptPromptsResponsePromptConfig = {
  messages: [
    {
      role: "exception",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `stream`                                                                                                                       | *boolean*                                                                                                                      | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `model`                                                                                                                        | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `modelDbId`                                                                                                                    | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The id of the resource                                                                                                         |
| `modelType`                                                                                                                    | [operations.CreatePromptPromptsResponseModelType](../../models/operations/createpromptpromptsresponsemodeltype.md)             | :heavy_minus_sign:                                                                                                             | The type of the model                                                                                                          |
| `modelParameters`                                                                                                              | [operations.CreatePromptPromptsResponseModelParameters](../../models/operations/createpromptpromptsresponsemodelparameters.md) | :heavy_minus_sign:                                                                                                             | Model Parameters: Not all parameters apply to every model                                                                      |
| `provider`                                                                                                                     | [operations.CreatePromptPromptsResponseProvider](../../models/operations/createpromptpromptsresponseprovider.md)               | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `integrationId`                                                                                                                | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The id of the resource                                                                                                         |
| `version`                                                                                                                      | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `messages`                                                                                                                     | [operations.CreatePromptPromptsResponseMessages](../../models/operations/createpromptpromptsresponsemessages.md)[]             | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |