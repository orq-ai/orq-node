# GetAllPromptsMetadata

## Example Usage

```typescript
import { GetAllPromptsMetadata } from "@orq-ai/node/models/operations";

let value: GetAllPromptsMetadata = {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `useCases`                                                                                                                | [operations.GetAllPromptsUseCases](../../models/operations/getallpromptsusecases.md)[]                                    | :heavy_minus_sign:                                                                                                        | A list of use cases that the prompt is meant to be used for. Use this field to categorize the prompt for your own purpose |
| `language`                                                                                                                | [operations.GetAllPromptsLanguage](../../models/operations/getallpromptslanguage.md)                                      | :heavy_minus_sign:                                                                                                        | The language that the prompt is written in. Use this field to categorize the prompt for your own purpose                  |