# FindOnePromptSnippetVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { FindOnePromptSnippetVersions } from "@orq-ai/node/models/operations";

let value: FindOnePromptSnippetVersions = {
  id: "<id>",
  displayName: "Vita_Ziemann3",
  promptConfig: {
    messages: [
      {
        role: "user",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://big-apricot.org",
            },
          },
        ],
      },
    ],
  },
  metadata: {},
  createdById: "48f6a6c8-3448-4bfb-ac25-6a445c9115cb",
  updatedById: "c488bf4c-a9cf-402c-a183-4b0d788a5152",
  timestamp: "<value>",
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                               | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `displayName`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | The prompt snippet’s name, meant to be displayable in the UI.                                                                                                      |
| `description`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | The prompt snippet’s description, meant to be displayable in the UI. Use this field to optionally store a long form explanation of the prompt for your own purpose |
| `promptConfig`                                                                                                                                                     | [operations.FindOnePromptSnippetPromptSnippetsPromptConfig](../../models/operations/findonepromptsnippetpromptsnippetspromptconfig.md)                             | :heavy_check_mark:                                                                                                                                                 | A list of messages compatible with the openAI schema                                                                                                               |
| `metadata`                                                                                                                                                         | [operations.FindOnePromptSnippetPromptSnippetsMetadata](../../models/operations/findonepromptsnippetpromptsnippetsmetadata.md)                                     | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `createdById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `updatedById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `timestamp`                                                                                                                                                        | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |