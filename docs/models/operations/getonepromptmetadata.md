# GetOnePromptMetadata

## Example Usage

```typescript
import { GetOnePromptMetadata } from "@orq-ai/node/models/operations";

let value: GetOnePromptMetadata = {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `useCases`                                                                                                                | [operations.GetOnePromptUseCases](../../models/operations/getonepromptusecases.md)[]                                      | :heavy_minus_sign:                                                                                                        | A list of use cases that the prompt is meant to be used for. Use this field to categorize the prompt for your own purpose |
| `language`                                                                                                                | [operations.GetOnePromptLanguage](../../models/operations/getonepromptlanguage.md)                                        | :heavy_minus_sign:                                                                                                        | The language that the prompt is written in. Use this field to categorize the prompt for your own purpose                  |