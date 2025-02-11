# CreatePromptSnippetMetadata

## Example Usage

```typescript
import { CreatePromptSnippetMetadata } from "@orq-ai/node/models/operations";

let value: CreatePromptSnippetMetadata = {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `useCases`                                                                                                                | [operations.UseCases](../../models/operations/usecases.md)[]                                                              | :heavy_minus_sign:                                                                                                        | A list of use cases that the prompt is meant to be used for. Use this field to categorize the prompt for your own purpose |
| `language`                                                                                                                | [operations.Language](../../models/operations/language.md)                                                                | :heavy_minus_sign:                                                                                                        | The language that the prompt is written in. Use this field to categorize the prompt for your own purpose                  |