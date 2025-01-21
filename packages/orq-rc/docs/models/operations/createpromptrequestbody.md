# CreatePromptRequestBody

## Example Usage

```typescript
import { CreatePromptRequestBody } from "@orq-ai/node/models/operations";

let value: CreatePromptRequestBody = {
  displayName: "Jodie85",
  type: "snippet",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `displayName`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `promptConfig`                                                                           | [operations.PromptConfig](../../models/operations/promptconfig.md)                       | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `metadata`                                                                               | [operations.CreatePromptMetadata](../../models/operations/createpromptmetadata.md)       | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `key`                                                                                    | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `type`                                                                                   | [operations.CreatePromptPromptsType](../../models/operations/createpromptpromptstype.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |