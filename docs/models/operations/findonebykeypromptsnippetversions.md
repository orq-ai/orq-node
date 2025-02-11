# FindOneByKeyPromptSnippetVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { FindOneByKeyPromptSnippetVersions } from "@orq-ai/node/models/operations";

let value: FindOneByKeyPromptSnippetVersions = {
  id: "<id>",
  promptConfig: {
    messages: [
      {
        role: "assistant",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://scared-rawhide.info/",
            },
          },
        ],
      },
    ],
  },
  metadata: {},
  createdById: "659e2e0a-6cb7-4a8c-9784-949226642004",
  updatedById: "b7e0259d-540d-469f-902c-cc8f6916b3fa",
  timestamp: "<value>",
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                               | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `description`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | The prompt snippet’s description, meant to be displayable in the UI. Use this field to optionally store a long form explanation of the prompt for your own purpose |
| `promptConfig`                                                                                                                                                     | [operations.FindOneByKeyPromptSnippetPromptSnippetsPromptConfig](../../models/operations/findonebykeypromptsnippetpromptsnippetspromptconfig.md)                   | :heavy_check_mark:                                                                                                                                                 | A list of messages compatible with the openAI schema                                                                                                               |
| `metadata`                                                                                                                                                         | [operations.FindOneByKeyPromptSnippetPromptSnippetsMetadata](../../models/operations/findonebykeypromptsnippetpromptsnippetsmetadata.md)                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `createdById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `updatedById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `timestamp`                                                                                                                                                        | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |