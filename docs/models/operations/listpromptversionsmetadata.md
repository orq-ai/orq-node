# ListPromptVersionsMetadata

## Example Usage

```typescript
import { ListPromptVersionsMetadata } from "@orq-ai/node/models/operations";

let value: ListPromptVersionsMetadata = {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `useCases`                                                                                                                | [operations.ListPromptVersionsUseCases](../../models/operations/listpromptversionsusecases.md)[]                          | :heavy_minus_sign:                                                                                                        | A list of use cases that the prompt is meant to be used for. Use this field to categorize the prompt for your own purpose |
| `language`                                                                                                                | [operations.ListPromptVersionsLanguage](../../models/operations/listpromptversionslanguage.md)                            | :heavy_minus_sign:                                                                                                        | The language that the prompt is written in. Use this field to categorize the prompt for your own purpose                  |