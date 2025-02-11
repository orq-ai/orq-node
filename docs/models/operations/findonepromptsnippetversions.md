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
        role: "prompt",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  createdById: "96becd04-8634-4f45-80d2-34e3cce13b34",
  updatedById: "27156061-7dd1-49d3-8cec-103496b525ef",
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