# ResponseBodyPromptConfig

## Example Usage

```typescript
import { ResponseBodyPromptConfig } from "@orq-ai/node/models/operations";

let value: ResponseBodyPromptConfig = {
  messages: [
    {
      role: "expected_output",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `stream`                                                                                         | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `model`                                                                                          | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `modelDbId`                                                                                      | *string*                                                                                         | :heavy_minus_sign:                                                                               | The id of the resource                                                                           |
| `modelType`                                                                                      | [operations.ResponseBodyModelType](../../models/operations/responsebodymodeltype.md)             | :heavy_minus_sign:                                                                               | The type of the model                                                                            |
| `modelParameters`                                                                                | [operations.ResponseBodyModelParameters](../../models/operations/responsebodymodelparameters.md) | :heavy_minus_sign:                                                                               | Model Parameters: Not all parameters apply to every model                                        |
| `provider`                                                                                       | [operations.ResponseBodyProvider](../../models/operations/responsebodyprovider.md)               | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `integrationId`                                                                                  | *string*                                                                                         | :heavy_minus_sign:                                                                               | The id of the resource                                                                           |
| `version`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `messages`                                                                                       | [operations.ResponseBodyMessages](../../models/operations/responsebodymessages.md)[]             | :heavy_check_mark:                                                                               | N/A                                                                                              |