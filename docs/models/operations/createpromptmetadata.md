# CreatePromptMetadata

## Example Usage

```typescript
import { CreatePromptMetadata } from "@orq-ai/node/models/operations";

let value: CreatePromptMetadata = {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `useCases`                                                                                                                | [operations.CreatePromptUseCases](../../models/operations/createpromptusecases.md)[]                                      | :heavy_minus_sign:                                                                                                        | A list of use cases that the prompt is meant to be used for. Use this field to categorize the prompt for your own purpose |
| `language`                                                                                                                | [operations.CreatePromptLanguage](../../models/operations/createpromptlanguage.md)                                        | :heavy_minus_sign:                                                                                                        | The language that the prompt is written in. Use this field to categorize the prompt for your own purpose                  |