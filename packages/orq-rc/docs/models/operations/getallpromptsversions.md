# GetAllPromptsVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { GetAllPromptsVersions } from "@orq-ai/node/models/operations";

let value: GetAllPromptsVersions = {
  id: "<id>",
  createdById: "89020e2d-5c54-4147-9d7f-806b3b80c817",
  displayName: "Shanel32",
  updatedById: "b6acdd2d-0391-4946-b518-f94f6bafe21c",
  promptConfig: {
    messages: [
      {
        role: "exception",
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
| `promptConfig`                                                                                                                                             | [operations.GetAllPromptsPromptsPromptConfig](../../models/operations/getallpromptspromptspromptconfig.md)                                                 | :heavy_check_mark:                                                                                                                                         | A list of messages compatible with the openAI schema                                                                                                       |
| `metadata`                                                                                                                                                 | [operations.GetAllPromptsPromptsMetadata](../../models/operations/getallpromptspromptsmetadata.md)                                                         | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `timestamp`                                                                                                                                                | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |