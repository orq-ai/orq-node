# UpdatePromptPromptsMetadata

## Example Usage

```typescript
import { UpdatePromptPromptsMetadata } from "@orq-ai/node/models/operations";

let value: UpdatePromptPromptsMetadata = {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `useCases`                                                                                                                | [operations.UpdatePromptPromptsUseCases](../../models/operations/updatepromptpromptsusecases.md)[]                        | :heavy_minus_sign:                                                                                                        | A list of use cases that the prompt is meant to be used for. Use this field to categorize the prompt for your own purpose |
| `language`                                                                                                                | [operations.UpdatePromptPromptsLanguage](../../models/operations/updatepromptpromptslanguage.md)                          | :heavy_minus_sign:                                                                                                        | The language that the prompt is written in. Use this field to categorize the prompt for your own purpose                  |