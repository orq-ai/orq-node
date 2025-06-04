# ListPromptVersionsPromptConfig

A list of messages compatible with the openAI schema

## Example Usage

```typescript
import { ListPromptVersionsPromptConfig } from "@orq-ai/node/models/operations";

let value: ListPromptVersionsPromptConfig = {
  messages: [],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `stream`                                                                                                     | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `model`                                                                                                      | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `modelDbId`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The id of the resource                                                                                       |
| `modelType`                                                                                                  | [operations.ListPromptVersionsModelType](../../models/operations/listpromptversionsmodeltype.md)             | :heavy_minus_sign:                                                                                           | The modality of the model                                                                                    |
| `modelParameters`                                                                                            | [operations.ListPromptVersionsModelParameters](../../models/operations/listpromptversionsmodelparameters.md) | :heavy_minus_sign:                                                                                           | Model Parameters: Not all parameters apply to every model                                                    |
| `provider`                                                                                                   | [operations.ListPromptVersionsProvider](../../models/operations/listpromptversionsprovider.md)               | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `integrationId`                                                                                              | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The id of the resource                                                                                       |
| `version`                                                                                                    | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `messages`                                                                                                   | [operations.ListPromptVersionsMessages](../../models/operations/listpromptversionsmessages.md)[]             | :heavy_check_mark:                                                                                           | N/A                                                                                                          |