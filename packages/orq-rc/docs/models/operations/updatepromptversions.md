# UpdatePromptVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { UpdatePromptVersions } from "@orq-ai/node/models/operations";

let value: UpdatePromptVersions = {
  id: "<id>",
  createdById: "1fd8648e-4835-43f9-8b15-e12a9de24601",
  displayName: "Jayden92",
  updatedById: "734c4679-f354-4515-9e45-fb8c1713256f",
  promptConfig: {
    messages: [
      {
        role: "exception",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://forceful-kick.biz",
            },
          },
        ],
      },
    ],
  },
  metadata: {},
  timestamp: "<value>",
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                       | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `createdById`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `displayName`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | The prompt’s name, meant to be displayable in the UI.                                                                                                      |
| `updatedById`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `description`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | The prompt’s description, meant to be displayable in the UI. Use this field to optionally store a long form explanation of the prompt for your own purpose |
| `promptConfig`                                                                                                                                             | [operations.UpdatePromptPromptsResponsePromptConfig](../../models/operations/updatepromptpromptsresponsepromptconfig.md)                                   | :heavy_check_mark:                                                                                                                                         | A list of messages compatible with the openAI schema                                                                                                       |
| `metadata`                                                                                                                                                 | [operations.UpdatePromptPromptsResponseMetadata](../../models/operations/updatepromptpromptsresponsemetadata.md)                                           | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `timestamp`                                                                                                                                                | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |