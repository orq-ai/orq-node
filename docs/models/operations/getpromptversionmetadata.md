# GetPromptVersionMetadata

## Example Usage

```typescript
import { GetPromptVersionMetadata } from "@orq-ai/node/models/operations";

let value: GetPromptVersionMetadata = {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `useCases`                                                                                                                | [operations.GetPromptVersionUseCases](../../models/operations/getpromptversionusecases.md)[]                              | :heavy_minus_sign:                                                                                                        | A list of use cases that the prompt is meant to be used for. Use this field to categorize the prompt for your own purpose |
| `language`                                                                                                                | [operations.GetPromptVersionLanguage](../../models/operations/getpromptversionlanguage.md)                                | :heavy_minus_sign:                                                                                                        | The language that the prompt is written in. Use this field to categorize the prompt for your own purpose                  |