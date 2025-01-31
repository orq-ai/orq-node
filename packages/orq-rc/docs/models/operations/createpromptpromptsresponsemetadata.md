# CreatePromptPromptsResponseMetadata

## Example Usage

```typescript
import { CreatePromptPromptsResponseMetadata } from "@orq-ai/node/models/operations";

let value: CreatePromptPromptsResponseMetadata = {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `useCases`                                                                                                                | [operations.CreatePromptPromptsResponseUseCases](../../models/operations/createpromptpromptsresponseusecases.md)[]        | :heavy_minus_sign:                                                                                                        | A list of use cases that the prompt is meant to be used for. Use this field to categorize the prompt for your own purpose |
| `language`                                                                                                                | [operations.CreatePromptPromptsResponseLanguage](../../models/operations/createpromptpromptsresponselanguage.md)          | :heavy_minus_sign:                                                                                                        | The language that the prompt is written in. Use this field to categorize the prompt for your own purpose                  |