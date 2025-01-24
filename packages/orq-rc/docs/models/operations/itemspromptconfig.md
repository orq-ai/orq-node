# ItemsPromptConfig

## Example Usage

```typescript
import { ItemsPromptConfig } from "@orq-ai/node/models/operations";

let value: ItemsPromptConfig = {
  messages: [
    {
      role: "assistant",
      content: [
        {
          type: "image_url",
          imageUrl: {
            url: "https://some-wedding.org",
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `stream`                                                                           | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `model`                                                                            | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `modelDbId`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | The id of the resource                                                             |
| `modelType`                                                                        | [operations.ItemsModelType](../../models/operations/itemsmodeltype.md)             | :heavy_minus_sign:                                                                 | The type of the model                                                              |
| `modelParameters`                                                                  | [operations.ItemsModelParameters](../../models/operations/itemsmodelparameters.md) | :heavy_minus_sign:                                                                 | Model Parameters: Not all parameters apply to every model                          |
| `provider`                                                                         | [operations.ItemsProvider](../../models/operations/itemsprovider.md)               | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `integrationId`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | The id of the resource                                                             |
| `version`                                                                          | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `messages`                                                                         | [operations.ItemsMessages](../../models/operations/itemsmessages.md)[]             | :heavy_check_mark:                                                                 | N/A                                                                                |