# UpdatePromptPromptsResponsePromptConfig

A list of messages compatible with the openAI schema

## Example Usage

```typescript
import { UpdatePromptPromptsResponsePromptConfig } from "@orq-ai/node/models/operations";

let value: UpdatePromptPromptsResponsePromptConfig = {
  messages: [
    {
      role: "tool",
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
| `modelType`                                                                                                                    | [operations.UpdatePromptPromptsResponseModelType](../../models/operations/updatepromptpromptsresponsemodeltype.md)             | :heavy_minus_sign:                                                                                                             | The type of the model                                                                                                          |
| `modelParameters`                                                                                                              | [operations.UpdatePromptPromptsResponseModelParameters](../../models/operations/updatepromptpromptsresponsemodelparameters.md) | :heavy_minus_sign:                                                                                                             | Model Parameters: Not all parameters apply to every model                                                                      |
| `provider`                                                                                                                     | [operations.UpdatePromptPromptsResponseProvider](../../models/operations/updatepromptpromptsresponseprovider.md)               | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `integrationId`                                                                                                                | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The id of the resource                                                                                                         |
| `version`                                                                                                                      | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `messages`                                                                                                                     | [operations.UpdatePromptPromptsResponseMessages](../../models/operations/updatepromptpromptsresponsemessages.md)[]             | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |