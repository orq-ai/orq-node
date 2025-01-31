# UpdatePromptSnippetVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { UpdatePromptSnippetVersions } from "@orq-ai/node/models/operations";

let value: UpdatePromptSnippetVersions = {
  id: "<id>",
  displayName: "Danyka47",
  promptConfig: {
    messages: [
      {
        role: "system",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://eminent-validity.name/",
            },
          },
        ],
      },
    ],
  },
  metadata: {},
  createdById: "14706739-c39a-4fcd-972f-271ffb544282",
  updatedById: "ab06ad7f-4074-4d34-9cb8-b600810fd20f",
  timestamp: "<value>",
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                               | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `displayName`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | The prompt snippet’s name, meant to be displayable in the UI.                                                                                                      |
| `description`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | The prompt snippet’s description, meant to be displayable in the UI. Use this field to optionally store a long form explanation of the prompt for your own purpose |
| `promptConfig`                                                                                                                                                     | [operations.UpdatePromptSnippetPromptSnippetsResponsePromptConfig](../../models/operations/updatepromptsnippetpromptsnippetsresponsepromptconfig.md)               | :heavy_check_mark:                                                                                                                                                 | A list of messages compatible with the openAI schema                                                                                                               |
| `metadata`                                                                                                                                                         | [operations.UpdatePromptSnippetPromptSnippetsResponseMetadata](../../models/operations/updatepromptsnippetpromptsnippetsresponsemetadata.md)                       | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `createdById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `updatedById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `timestamp`                                                                                                                                                        | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |