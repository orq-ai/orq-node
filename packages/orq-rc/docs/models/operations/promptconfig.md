# PromptConfig

A list of messages compatible with the openAI schema

## Example Usage

```typescript
import { PromptConfig } from "@orq-ai/node/models/operations";

let value: PromptConfig = {
  messages: [
    {
      role: "exception",
      content: [
        {
          type: "text",
          text: "<value>",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `stream`                                                                             | *boolean*                                                                            | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `model`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `modelType`                                                                          | [operations.ModelType](../../models/operations/modeltype.md)                         | :heavy_minus_sign:                                                                   | The type of the model                                                                |
| `modelParameters`                                                                    | [operations.ModelParameters](../../models/operations/modelparameters.md)             | :heavy_minus_sign:                                                                   | Model Parameters: Not all parameters apply to every model                            |
| `provider`                                                                           | [operations.Provider](../../models/operations/provider.md)                           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `version`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `messages`                                                                           | [operations.UpdatePromptMessages](../../models/operations/updatepromptmessages.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |