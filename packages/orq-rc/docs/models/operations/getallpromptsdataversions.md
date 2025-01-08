# GetAllPromptsDataVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { GetAllPromptsDataVersions } from "@orq-ai/node/models/operations";

let value: GetAllPromptsDataVersions = {
  id: "<id>",
  createdById: "045b5c95-2066-45c1-b138-be4284f03c68",
  displayName: "Manuela.Parker",
  updatedById: "5fde290b-0a39-440a-a7b0-802c3122d9c4",
  promptConfig: {
    messages: [
      {
        role: "expected_output",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://wide-bin.net/",
            },
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