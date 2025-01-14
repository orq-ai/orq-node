# UpdatePromptResponseBodyPromptsPromptConfig

## Example Usage

```typescript
import { UpdatePromptResponseBodyPromptsPromptConfig } from "@orq-ai/node/models/operations";

let value: UpdatePromptResponseBodyPromptsPromptConfig = {
  messages: [
    {
      role: "prompt",
      content: [
        {
          type: "image_url",
          imageUrl: {
            url: "https://infatuated-bug.info",
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `stream`                                                                                                                               | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `model`                                                                                                                                | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `modelDbId`                                                                                                                            | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | The id of the resource                                                                                                                 |
| `modelType`                                                                                                                            | [operations.UpdatePromptResponseBodyPromptsModelType](../../models/operations/updatepromptresponsebodypromptsmodeltype.md)             | :heavy_minus_sign:                                                                                                                     | The type of the model                                                                                                                  |
| `modelParameters`                                                                                                                      | [operations.UpdatePromptResponseBodyPromptsModelParameters](../../models/operations/updatepromptresponsebodypromptsmodelparameters.md) | :heavy_minus_sign:                                                                                                                     | Model Parameters: Not all parameters apply to every model                                                                              |
| `provider`                                                                                                                             | [operations.UpdatePromptResponseBodyPromptsProvider](../../models/operations/updatepromptresponsebodypromptsprovider.md)               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `integrationId`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | The id of the resource                                                                                                                 |
| `version`                                                                                                                              | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `messages`                                                                                                                             | [operations.UpdatePromptResponseBodyPromptsMessages](../../models/operations/updatepromptresponsebodypromptsmessages.md)[]             | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |