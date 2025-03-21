# GetPromptVersionPromptConfig

A list of messages compatible with the openAI schema

## Example Usage

```typescript
import { GetPromptVersionPromptConfig } from "@orq-ai/node/models/operations";

let value: GetPromptVersionPromptConfig = {
  messages: [
    {
      role: "tool",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `stream`                                                                                                 | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `model`                                                                                                  | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `modelDbId`                                                                                              | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The id of the resource                                                                                   |
| `modelType`                                                                                              | [operations.GetPromptVersionModelType](../../models/operations/getpromptversionmodeltype.md)             | :heavy_minus_sign:                                                                                       | The type of the model                                                                                    |
| `modelParameters`                                                                                        | [operations.GetPromptVersionModelParameters](../../models/operations/getpromptversionmodelparameters.md) | :heavy_minus_sign:                                                                                       | Model Parameters: Not all parameters apply to every model                                                |
| `provider`                                                                                               | [operations.GetPromptVersionProvider](../../models/operations/getpromptversionprovider.md)               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `integrationId`                                                                                          | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The id of the resource                                                                                   |
| `version`                                                                                                | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `messages`                                                                                               | [operations.GetPromptVersionMessages](../../models/operations/getpromptversionmessages.md)[]             | :heavy_check_mark:                                                                                       | N/A                                                                                                      |