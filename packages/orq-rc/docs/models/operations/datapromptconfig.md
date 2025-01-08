# DataPromptConfig

## Example Usage

```typescript
import { DataPromptConfig } from "@orq-ai/node/models/operations";

let value: DataPromptConfig = {
  messages: [
    {
      role: "assistant",
      content: [
        {
          type: "image_url",
          imageUrl: {
            url: "https://sore-alert.com/",
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `stream`                                                                         | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |
| `model`                                                                          | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `modelDbId`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | The id of the resource                                                           |
| `modelType`                                                                      | [operations.DataModelType](../../models/operations/datamodeltype.md)             | :heavy_minus_sign:                                                               | The type of the model                                                            |
| `modelParameters`                                                                | [operations.DataModelParameters](../../models/operations/datamodelparameters.md) | :heavy_minus_sign:                                                               | Model Parameters: Not all parameters apply to every model                        |
| `provider`                                                                       | [operations.DataProvider](../../models/operations/dataprovider.md)               | :heavy_minus_sign:                                                               | N/A                                                                              |
| `integrationId`                                                                  | *string*                                                                         | :heavy_minus_sign:                                                               | The id of the resource                                                           |
| `version`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `messages`                                                                       | [operations.DataMessages](../../models/operations/datamessages.md)[]             | :heavy_check_mark:                                                               | N/A                                                                              |