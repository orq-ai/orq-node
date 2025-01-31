# UpdatePromptPromptsResponseMetadata

## Example Usage

```typescript
import { UpdatePromptPromptsResponseMetadata } from "@orq-ai/node/models/operations";

let value: UpdatePromptPromptsResponseMetadata = {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `useCases`                                                                                                                | [operations.UpdatePromptPromptsResponseUseCases](../../models/operations/updatepromptpromptsresponseusecases.md)[]        | :heavy_minus_sign:                                                                                                        | A list of use cases that the prompt is meant to be used for. Use this field to categorize the prompt for your own purpose |
| `language`                                                                                                                | [operations.UpdatePromptPromptsResponseLanguage](../../models/operations/updatepromptpromptsresponselanguage.md)          | :heavy_minus_sign:                                                                                                        | The language that the prompt is written in. Use this field to categorize the prompt for your own purpose                  |