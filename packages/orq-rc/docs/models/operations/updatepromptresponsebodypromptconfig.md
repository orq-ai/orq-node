# UpdatePromptResponseBodyPromptConfig

## Example Usage

```typescript
import { UpdatePromptResponseBodyPromptConfig } from "@orq-ai/node/models/operations";

let value: UpdatePromptResponseBodyPromptConfig = {
  messages: [
    {
      role: "expected_output",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `stream`                                                                                                                 | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `model`                                                                                                                  | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `modelDbId`                                                                                                              | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The id of the resource                                                                                                   |
| `modelType`                                                                                                              | [operations.UpdatePromptResponseBodyModelType](../../models/operations/updatepromptresponsebodymodeltype.md)             | :heavy_minus_sign:                                                                                                       | The type of the model                                                                                                    |
| `modelParameters`                                                                                                        | [operations.UpdatePromptResponseBodyModelParameters](../../models/operations/updatepromptresponsebodymodelparameters.md) | :heavy_minus_sign:                                                                                                       | Model Parameters: Not all parameters apply to every model                                                                |
| `provider`                                                                                                               | [operations.UpdatePromptResponseBodyProvider](../../models/operations/updatepromptresponsebodyprovider.md)               | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `integrationId`                                                                                                          | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The id of the resource                                                                                                   |
| `version`                                                                                                                | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `messages`                                                                                                               | [operations.UpdatePromptResponseBodyMessages](../../models/operations/updatepromptresponsebodymessages.md)[]             | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |