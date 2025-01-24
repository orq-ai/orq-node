# GetAllPromptsDataVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { GetAllPromptsDataVersions } from "@orq-ai/node/models/operations";

let value: GetAllPromptsDataVersions = {
  id: "<id>",
  createdById: "a988c31b-ab78-413a-a0ed-b84f46a58d86",
  displayName: "Elmer29",
  updatedById: "f164707a-7590-46e0-b882-16870ced8eb7",
  promptConfig: {
    messages: [
      {
        role: "system",
        content: [
          {
            type: "text",
            text: "<value>",
          },
        ],
      },
    ],
  },
  metadata: {},
  commit: "<value>",
  timestamp: "<value>",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `createdById`                                                                                                                      | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `displayName`                                                                                                                      | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `updatedById`                                                                                                                      | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `description`                                                                                                                      | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `promptConfig`                                                                                                                     | [operations.GetAllPromptsDataPromptsResponsePromptConfig](../../models/operations/getallpromptsdatapromptsresponsepromptconfig.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `metadata`                                                                                                                         | [operations.GetAllPromptsDataPromptsResponseMetadata](../../models/operations/getallpromptsdatapromptsresponsemetadata.md)         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `commit`                                                                                                                           | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `timestamp`                                                                                                                        | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |