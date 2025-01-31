# CreatePromptSnippetPromptSnippetsResponseMetadata

## Example Usage

```typescript
import { CreatePromptSnippetPromptSnippetsResponseMetadata } from "@orq-ai/node/models/operations";

let value: CreatePromptSnippetPromptSnippetsResponseMetadata = {};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `useCases`                                                                                                                     | [operations.CreatePromptSnippetPromptSnippetsUseCases](../../models/operations/createpromptsnippetpromptsnippetsusecases.md)[] | :heavy_minus_sign:                                                                                                             | A list of use cases that the prompt is meant to be used for. Use this field to categorize the prompt for your own purpose      |
| `language`                                                                                                                     | [operations.CreatePromptSnippetPromptSnippetsLanguage](../../models/operations/createpromptsnippetpromptsnippetslanguage.md)   | :heavy_minus_sign:                                                                                                             | The language that the prompt is written in. Use this field to categorize the prompt for your own purpose                       |