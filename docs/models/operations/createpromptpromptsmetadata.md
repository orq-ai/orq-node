# CreatePromptPromptsMetadata

## Example Usage

```typescript
import { CreatePromptPromptsMetadata } from "@orq-ai/node/models/operations";

let value: CreatePromptPromptsMetadata = {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `useCases`                                                                                                                | [operations.CreatePromptPromptsUseCases](../../models/operations/createpromptpromptsusecases.md)[]                        | :heavy_minus_sign:                                                                                                        | A list of use cases that the prompt is meant to be used for. Use this field to categorize the prompt for your own purpose |
| `language`                                                                                                                | [operations.CreatePromptPromptsLanguage](../../models/operations/createpromptpromptslanguage.md)                          | :heavy_minus_sign:                                                                                                        | The language that the prompt is written in. Use this field to categorize the prompt for your own purpose                  |