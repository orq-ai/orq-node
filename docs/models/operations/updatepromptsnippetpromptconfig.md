# UpdatePromptSnippetPromptConfig

A list of messages compatible with the openAI schema

## Example Usage

```typescript
import { UpdatePromptSnippetPromptConfig } from "@orq-ai/node/models/operations";

let value: UpdatePromptSnippetPromptConfig = {
  messages: [
    {
      role: "system",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `stream`                                                                                                       | *boolean*                                                                                                      | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `model`                                                                                                        | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `modelType`                                                                                                    | [operations.UpdatePromptSnippetModelType](../../models/operations/updatepromptsnippetmodeltype.md)             | :heavy_minus_sign:                                                                                             | The type of the model                                                                                          |
| `modelParameters`                                                                                              | [operations.UpdatePromptSnippetModelParameters](../../models/operations/updatepromptsnippetmodelparameters.md) | :heavy_minus_sign:                                                                                             | Model Parameters: Not all parameters apply to every model                                                      |
| `provider`                                                                                                     | [operations.UpdatePromptSnippetProvider](../../models/operations/updatepromptsnippetprovider.md)               | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `version`                                                                                                      | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `messages`                                                                                                     | [operations.UpdatePromptSnippetMessages](../../models/operations/updatepromptsnippetmessages.md)[]             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |