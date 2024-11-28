# GetAllPromptsItemsPromptsResponse200PromptConfig

## Example Usage

```typescript
import { GetAllPromptsItemsPromptsResponse200PromptConfig } from "@orq-ai/node/models/operations";

let value: GetAllPromptsItemsPromptsResponse200PromptConfig = {
  messages: [
    {
      role: "assistant",
      content: [
        {
          type: "image_url",
          imageUrl: {
            url: "https://accomplished-tomography.info",
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `stream`                                                                                                                                         | *boolean*                                                                                                                                        | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |
| `model`                                                                                                                                          | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |
| `modelDbId`                                                                                                                                      | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | The id of the resource                                                                                                                           |
| `modelType`                                                                                                                                      | [operations.GetAllPromptsItemsPromptsResponse200ModelType](../../models/operations/getallpromptsitemspromptsresponse200modeltype.md)             | :heavy_minus_sign:                                                                                                                               | The type of the model                                                                                                                            |
| `modelParameters`                                                                                                                                | [operations.GetAllPromptsItemsPromptsResponse200ModelParameters](../../models/operations/getallpromptsitemspromptsresponse200modelparameters.md) | :heavy_minus_sign:                                                                                                                               | Model Parameters: Not all parameters apply to every model                                                                                        |
| `provider`                                                                                                                                       | [operations.GetAllPromptsItemsPromptsResponse200Provider](../../models/operations/getallpromptsitemspromptsresponse200provider.md)               | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |
| `integrationId`                                                                                                                                  | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | The id of the resource                                                                                                                           |
| `version`                                                                                                                                        | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |
| `messages`                                                                                                                                       | [operations.GetAllPromptsItemsPromptsResponse200Messages](../../models/operations/getallpromptsitemspromptsresponse200messages.md)[]             | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |