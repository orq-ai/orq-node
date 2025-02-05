# FindOnePromptSnippetVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { FindOnePromptSnippetVersions } from "@orq-ai/node/models/operations";

let value: FindOnePromptSnippetVersions = {
  id: "<id>",
  promptConfig: {
    messages: [
      {
        role: "tool",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  createdById: "11506a61-142f-42c9-b98f-5c86f916cbe4",
  updatedById: "79ffd5ea-60c8-4cbc-b4c8-7a014f25055f",
  timestamp: "<value>",
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                               | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `description`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | The prompt snippet’s description, meant to be displayable in the UI. Use this field to optionally store a long form explanation of the prompt for your own purpose |
| `promptConfig`                                                                                                                                                     | [operations.FindOnePromptSnippetPromptSnippetsPromptConfig](../../models/operations/findonepromptsnippetpromptsnippetspromptconfig.md)                             | :heavy_check_mark:                                                                                                                                                 | A list of messages compatible with the openAI schema                                                                                                               |
| `metadata`                                                                                                                                                         | [operations.FindOnePromptSnippetPromptSnippetsMetadata](../../models/operations/findonepromptsnippetpromptsnippetsmetadata.md)                                     | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `createdById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `updatedById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `timestamp`                                                                                                                                                        | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |