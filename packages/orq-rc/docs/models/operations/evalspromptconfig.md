# EvalsPromptConfig

## Example Usage

```typescript
import { EvalsPromptConfig } from "@orq-ai/node/models/operations";

let value: EvalsPromptConfig = {
  stream: false,
  model: "Taurus",
  modelDbId: "67b5f4f6-cc9c-4992-be28-5428d75e27ce",
  modelType: "completion",
  modelParameters: {},
  provider: "anyscale",
  messages: [
    {
      role: "assistant",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `stream`                                                                           | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `model`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `modelDbId`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | The id of the resource                                                             |
| `modelType`                                                                        | [operations.EvalsModelType](../../models/operations/evalsmodeltype.md)             | :heavy_check_mark:                                                                 | The type of the model                                                              |
| `modelParameters`                                                                  | [operations.EvalsModelParameters](../../models/operations/evalsmodelparameters.md) | :heavy_check_mark:                                                                 | Model Parameters: Not all parameters apply to every model                          |
| `provider`                                                                         | [operations.EvalsProvider](../../models/operations/evalsprovider.md)               | :heavy_check_mark:                                                                 | N/A                                                                                |
| `messages`                                                                         | [operations.EvalsMessages](../../models/operations/evalsmessages.md)[]             | :heavy_check_mark:                                                                 | N/A                                                                                |
| `integrationId`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | The id of the resource                                                             |
| `version`                                                                          | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |