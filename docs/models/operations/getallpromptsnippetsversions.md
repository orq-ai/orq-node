# GetAllPromptSnippetsVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { GetAllPromptSnippetsVersions } from "@orq-ai/node/models/operations";

let value: GetAllPromptSnippetsVersions = {
  id: "<id>",
  promptConfig: {
    messages: [
      {
        role: "assistant",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  createdById: "00ebea84-f576-4f25-aa19-7438575f2159",
  updatedById: "6f5badfe-cb52-4136-b8cf-119bdef662aa",
  timestamp: "<value>",
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                               | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `description`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | The prompt snippet’s description, meant to be displayable in the UI. Use this field to optionally store a long form explanation of the prompt for your own purpose |
| `promptConfig`                                                                                                                                                     | [operations.GetAllPromptSnippetsPromptSnippetsPromptConfig](../../models/operations/getallpromptsnippetspromptsnippetspromptconfig.md)                             | :heavy_check_mark:                                                                                                                                                 | A list of messages compatible with the openAI schema                                                                                                               |
| `metadata`                                                                                                                                                         | [operations.GetAllPromptSnippetsPromptSnippetsMetadata](../../models/operations/getallpromptsnippetspromptsnippetsmetadata.md)                                     | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `createdById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `updatedById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `timestamp`                                                                                                                                                        | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |