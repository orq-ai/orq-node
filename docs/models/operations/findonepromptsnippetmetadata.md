# FindOnePromptSnippetMetadata

## Example Usage

```typescript
import { FindOnePromptSnippetMetadata } from "@orq-ai/node/models/operations";

let value: FindOnePromptSnippetMetadata = {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `useCases`                                                                                                                | [operations.FindOnePromptSnippetUseCases](../../models/operations/findonepromptsnippetusecases.md)[]                      | :heavy_minus_sign:                                                                                                        | A list of use cases that the prompt is meant to be used for. Use this field to categorize the prompt for your own purpose |
| `language`                                                                                                                | [operations.FindOnePromptSnippetLanguage](../../models/operations/findonepromptsnippetlanguage.md)                        | :heavy_minus_sign:                                                                                                        | The language that the prompt is written in. Use this field to categorize the prompt for your own purpose                  |