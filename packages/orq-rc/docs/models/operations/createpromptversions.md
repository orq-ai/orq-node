# CreatePromptVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { CreatePromptVersions } from "@orq-ai/node/models/operations";

let value: CreatePromptVersions = {
  id: "<id>",
  createdById: "81df7016-e2d0-47a0-b9f2-b92008fab792",
  displayName: "Noemie96",
  updatedById: "28622f4f-1720-481b-ab2f-b4bb5659e2e0",
  promptConfig: {
    messages: [
      {
        role: "exception",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://proud-knight.net/",
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
| `promptConfig`                                                                                                                                             | [operations.CreatePromptPromptsResponsePromptConfig](../../models/operations/createpromptpromptsresponsepromptconfig.md)                                   | :heavy_check_mark:                                                                                                                                         | A list of messages compatible with the openAI schema                                                                                                       |
| `metadata`                                                                                                                                                 | [operations.CreatePromptPromptsResponseMetadata](../../models/operations/createpromptpromptsresponsemetadata.md)                                           | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `timestamp`                                                                                                                                                | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |