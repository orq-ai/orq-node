# GetPromptVersionResponseBody

Prompt version retrieved successfully.

## Example Usage

```typescript
import { GetPromptVersionResponseBody } from "@orq-ai/node/models/operations";

let value: GetPromptVersionResponseBody = {
  id: "<id>",
  promptConfig: {
    messages: [
      {
        role: "exception",
        content: [
          {
            type: "file",
            file: {
              fileData: "<value>",
            },
          },
        ],
      },
    ],
  },
  timestamp: "<value>",
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                       | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `createdById`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |
| `updatedById`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |
| `description`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | The prompt’s description, meant to be displayable in the UI. Use this field to optionally store a long form explanation of the prompt for your own purpose |
| `promptConfig`                                                                                                                                             | [operations.GetPromptVersionPromptConfig](../../models/operations/getpromptversionpromptconfig.md)                                                         | :heavy_check_mark:                                                                                                                                         | A list of messages compatible with the openAI schema                                                                                                       |
| `metadata`                                                                                                                                                 | [operations.GetPromptVersionMetadata](../../models/operations/getpromptversionmetadata.md)                                                                 | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |
| `timestamp`                                                                                                                                                | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |