# UpdatePromptResponseBodyPromptsResponse200PromptConfig

## Example Usage

```typescript
import { UpdatePromptResponseBodyPromptsResponse200PromptConfig } from "@orq-ai/node/models/operations";

let value: UpdatePromptResponseBodyPromptsResponse200PromptConfig = {
  messages: [
    {
      role: "prompt",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `stream`                                                                                                                                                     | *boolean*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `model`                                                                                                                                                      | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `modelDbId`                                                                                                                                                  | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | The id of the resource                                                                                                                                       |
| `modelType`                                                                                                                                                  | [operations.UpdatePromptResponseBodyPromptsResponse200ModelType](../../models/operations/updatepromptresponsebodypromptsresponse200modeltype.md)             | :heavy_minus_sign:                                                                                                                                           | The type of the model                                                                                                                                        |
| `modelParameters`                                                                                                                                            | [operations.UpdatePromptResponseBodyPromptsResponse200ModelParameters](../../models/operations/updatepromptresponsebodypromptsresponse200modelparameters.md) | :heavy_minus_sign:                                                                                                                                           | Model Parameters: Not all parameters apply to every model                                                                                                    |
| `provider`                                                                                                                                                   | [operations.UpdatePromptResponseBodyPromptsResponse200Provider](../../models/operations/updatepromptresponsebodypromptsresponse200provider.md)               | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `integrationId`                                                                                                                                              | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | The id of the resource                                                                                                                                       |
| `version`                                                                                                                                                    | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `messages`                                                                                                                                                   | [operations.UpdatePromptResponseBodyPromptsResponse200Messages](../../models/operations/updatepromptresponsebodypromptsresponse200messages.md)[]             | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |