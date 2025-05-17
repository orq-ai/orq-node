# UpdatePromptPromptsPromptConfig

A list of messages compatible with the openAI schema

## Example Usage

```typescript
import { UpdatePromptPromptsPromptConfig } from "@orq-ai/node/models/operations";

let value: UpdatePromptPromptsPromptConfig = {
  messages: [
    {
      role: "assistant",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `stream`                                                                                                       | *boolean*                                                                                                      | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `model`                                                                                                        | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `modelDbId`                                                                                                    | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | The id of the resource                                                                                         |
| `modelType`                                                                                                    | [operations.UpdatePromptPromptsModelType](../../models/operations/updatepromptpromptsmodeltype.md)             | :heavy_minus_sign:                                                                                             | The modality of the model                                                                                      |
| `modelParameters`                                                                                              | [operations.UpdatePromptPromptsModelParameters](../../models/operations/updatepromptpromptsmodelparameters.md) | :heavy_minus_sign:                                                                                             | Model Parameters: Not all parameters apply to every model                                                      |
| `provider`                                                                                                     | [operations.UpdatePromptPromptsProvider](../../models/operations/updatepromptpromptsprovider.md)               | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `integrationId`                                                                                                | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | The id of the resource                                                                                         |
| `version`                                                                                                      | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `messages`                                                                                                     | [operations.UpdatePromptPromptsMessages](../../models/operations/updatepromptpromptsmessages.md)[]             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |