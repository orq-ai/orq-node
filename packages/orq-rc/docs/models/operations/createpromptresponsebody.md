# CreatePromptResponseBody

Prompt created.

## Example Usage

```typescript
import { CreatePromptResponseBody } from "@orq-ai/node/models/operations";

let value: CreatePromptResponseBody = {
  id: "ulid-string",
  displayName: "string",
  domainId: "uuid-string",
  description: "Sample description for the prompt",
  type: "prompt",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The id of the resource                                                                                   |
| `displayName`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `domainId`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The id of the resource                                                                                   |
| `description`                                                                                            | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `promptConfig`                                                                                           | [operations.CreatePromptPromptConfig](../../models/operations/createpromptpromptconfig.md)               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `metadata`                                                                                               | [operations.CreatePromptPromptsMetadata](../../models/operations/createpromptpromptsmetadata.md)         | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `key`                                                                                                    | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `type`                                                                                                   | [operations.CreatePromptPromptsResponseType](../../models/operations/createpromptpromptsresponsetype.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |