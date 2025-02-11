# GetAllPromptSnippetsMetadata

## Example Usage

```typescript
import { GetAllPromptSnippetsMetadata } from "@orq-ai/node/models/operations";

let value: GetAllPromptSnippetsMetadata = {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `useCases`                                                                                                                | [operations.GetAllPromptSnippetsUseCases](../../models/operations/getallpromptsnippetsusecases.md)[]                      | :heavy_minus_sign:                                                                                                        | A list of use cases that the prompt is meant to be used for. Use this field to categorize the prompt for your own purpose |
| `language`                                                                                                                | [operations.GetAllPromptSnippetsLanguage](../../models/operations/getallpromptsnippetslanguage.md)                        | :heavy_minus_sign:                                                                                                        | The language that the prompt is written in. Use this field to categorize the prompt for your own purpose                  |