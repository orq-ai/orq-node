# GetAllPromptsPromptsMetadata

## Example Usage

```typescript
import { GetAllPromptsPromptsMetadata } from "@orq-ai/node/models/operations";

let value: GetAllPromptsPromptsMetadata = {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `useCases`                                                                                                                | [operations.GetAllPromptsPromptsUseCases](../../models/operations/getallpromptspromptsusecases.md)[]                      | :heavy_minus_sign:                                                                                                        | A list of use cases that the prompt is meant to be used for. Use this field to categorize the prompt for your own purpose |
| `language`                                                                                                                | [operations.GetAllPromptsPromptsLanguage](../../models/operations/getallpromptspromptslanguage.md)                        | :heavy_minus_sign:                                                                                                        | The language that the prompt is written in. Use this field to categorize the prompt for your own purpose                  |