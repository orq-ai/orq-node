# UpdatePromptVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { UpdatePromptVersions } from "@orq-ai/node/models/operations";

let value: UpdatePromptVersions = {
  id: "<id>",
  createdById: "bd2caef1-1c23-4ef5-8dd9-9949326b9fa2",
  displayName: "Augusta_Metz",
  updatedById: "8c492727-6632-443b-ab91-910539ebcfa9",
  promptConfig: {
    messages: [
      {
        role: "correction",
        content: "<value>",
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