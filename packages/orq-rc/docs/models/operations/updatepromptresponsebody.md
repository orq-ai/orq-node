# UpdatePromptResponseBody

Prompt updated.

## Example Usage

```typescript
import { UpdatePromptResponseBody } from "@orq-ai/node/models/operations";

let value: UpdatePromptResponseBody = {
  id: "<id>",
  type: "prompt",
  owner: "<value>",
  domainId: "bb3ad3ca-f424-44cb-ba3d-f8a84453ed75",
  created: "<value>",
  updated: "<value>",
  displayName: "Dameon.Becker",
  promptConfig: {
    messages: [
      {
        role: "tool",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://light-soup.com",
            },
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                       | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `type`                                                                                                                                                     | [operations.UpdatePromptPromptsType](../../models/operations/updatepromptpromptstype.md)                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `owner`                                                                                                                                                    | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `domainId`                                                                                                                                                 | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `created`                                                                                                                                                  | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `updated`                                                                                                                                                  | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `createdById`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |
| `updatedById`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |
| `displayName`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | The prompt’s name, meant to be displayable in the UI.                                                                                                      |
| `description`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | The prompt’s description, meant to be displayable in the UI. Use this field to optionally store a long form explanation of the prompt for your own purpose |
| `promptConfig`                                                                                                                                             | [operations.UpdatePromptPromptsPromptConfig](../../models/operations/updatepromptpromptspromptconfig.md)                                                   | :heavy_check_mark:                                                                                                                                         | A list of messages compatible with the openAI schema                                                                                                       |
| `metadata`                                                                                                                                                 | [operations.UpdatePromptPromptsMetadata](../../models/operations/updatepromptpromptsmetadata.md)                                                           | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |