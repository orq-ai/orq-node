# UpdatePromptSnippetVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { UpdatePromptSnippetVersions } from "@orq-ai/node/models/operations";

let value: UpdatePromptSnippetVersions = {
  id: "<id>",
  promptConfig: {
    messages: [
      {
        role: "expected_output",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://worthy-t-shirt.net",
            },
          },
        ],
      },
    ],
  },
  metadata: {},
  createdById: "5537fe10-e83a-4a14-9032-3a012544cf8f",
  updatedById: "1647a7ee-b726-4b41-beb9-cd7ee4988f4f",
  timestamp: "<value>",
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                               | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `description`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | The prompt snippet’s description, meant to be displayable in the UI. Use this field to optionally store a long form explanation of the prompt for your own purpose |
| `promptConfig`                                                                                                                                                     | [operations.UpdatePromptSnippetPromptSnippetsResponsePromptConfig](../../models/operations/updatepromptsnippetpromptsnippetsresponsepromptconfig.md)               | :heavy_check_mark:                                                                                                                                                 | A list of messages compatible with the openAI schema                                                                                                               |
| `metadata`                                                                                                                                                         | [operations.UpdatePromptSnippetPromptSnippetsResponseMetadata](../../models/operations/updatepromptsnippetpromptsnippetsresponsemetadata.md)                       | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `createdById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `updatedById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `timestamp`                                                                                                                                                        | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |