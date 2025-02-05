# CreatePromptSnippetPromptConfig

A list of messages compatible with the openAI schema

## Example Usage

```typescript
import { CreatePromptSnippetPromptConfig } from "@orq-ai/node/models/operations";

let value: CreatePromptSnippetPromptConfig = {
  messages: [
    {
      role: "expected_output",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `stream`                                                                                                                       | *boolean*                                                                                                                      | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `model`                                                                                                                        | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `modelDbId`                                                                                                                    | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The id of the resource                                                                                                         |
| `modelType`                                                                                                                    | [operations.CreatePromptSnippetModelType](../../models/operations/createpromptsnippetmodeltype.md)                             | :heavy_minus_sign:                                                                                                             | The type of the model                                                                                                          |
| `modelParameters`                                                                                                              | [operations.CreatePromptSnippetModelParameters](../../models/operations/createpromptsnippetmodelparameters.md)                 | :heavy_minus_sign:                                                                                                             | Model Parameters: Not all parameters apply to every model                                                                      |
| `provider`                                                                                                                     | [operations.CreatePromptSnippetProvider](../../models/operations/createpromptsnippetprovider.md)                               | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `integrationId`                                                                                                                | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The id of the resource                                                                                                         |
| `version`                                                                                                                      | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `messages`                                                                                                                     | [operations.CreatePromptSnippetPromptSnippetsMessages](../../models/operations/createpromptsnippetpromptsnippetsmessages.md)[] | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |