# UpdatePromptMetadata

## Example Usage

```typescript
import { UpdatePromptMetadata } from "@orq-ai/node/models/operations";

let value: UpdatePromptMetadata = {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `useCases`                                                                                                                | [operations.UpdatePromptUseCases](../../models/operations/updatepromptusecases.md)[]                                      | :heavy_minus_sign:                                                                                                        | A list of use cases that the prompt is meant to be used for. Use this field to categorize the prompt for your own purpose |
| `language`                                                                                                                | [operations.UpdatePromptLanguage](../../models/operations/updatepromptlanguage.md)                                        | :heavy_minus_sign:                                                                                                        | The language that the prompt is written in. Use this field to categorize the prompt for your own purpose                  |