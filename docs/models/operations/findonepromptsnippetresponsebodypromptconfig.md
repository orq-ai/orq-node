# FindOnePromptSnippetResponseBodyPromptConfig

## Example Usage

```typescript
import { FindOnePromptSnippetResponseBodyPromptConfig } from "@orq-ai/node/models/operations";

let value: FindOnePromptSnippetResponseBodyPromptConfig = {
  messages: [
    {
      role: "system",
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

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `stream`                                                                                                                                 | *boolean*                                                                                                                                | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `model`                                                                                                                                  | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `modelDbId`                                                                                                                              | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The id of the resource                                                                                                                   |
| `modelType`                                                                                                                              | [operations.FindOnePromptSnippetResponseBodyModelType](../../models/operations/findonepromptsnippetresponsebodymodeltype.md)             | :heavy_minus_sign:                                                                                                                       | The type of the model                                                                                                                    |
| `modelParameters`                                                                                                                        | [operations.FindOnePromptSnippetResponseBodyModelParameters](../../models/operations/findonepromptsnippetresponsebodymodelparameters.md) | :heavy_minus_sign:                                                                                                                       | Model Parameters: Not all parameters apply to every model                                                                                |
| `provider`                                                                                                                               | [operations.FindOnePromptSnippetResponseBodyProvider](../../models/operations/findonepromptsnippetresponsebodyprovider.md)               | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `integrationId`                                                                                                                          | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The id of the resource                                                                                                                   |
| `version`                                                                                                                                | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `messages`                                                                                                                               | [operations.FindOnePromptSnippetResponseBodyMessages](../../models/operations/findonepromptsnippetresponsebodymessages.md)[]             | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |