# UpdatePromptResponseBody

Prompt updated.

## Example Usage

```typescript
import { UpdatePromptResponseBody } from "@orq-ai/node/models/operations";

let value: UpdatePromptResponseBody = {
  id: "<id>",
  type: "prompt",
  owner: "<value>",
  domainId: "035d775e-ff6f-4ca3-832e-477cd26dd124",
  created: "<value>",
  updated: "<value>",
  displayName: "Hermann.Mante59",
  promptConfig: {
    messages: [
      {
        role: "expected_output",
        content: [
          {
            type: "text",
            text: "<value>",
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
| `promptConfig`                                                                                                                                             | [operations.UpdatePromptPromptConfig](../../models/operations/updatepromptpromptconfig.md)                                                                 | :heavy_check_mark:                                                                                                                                         | A list of messages compatible with the openAI schema                                                                                                       |
| `metadata`                                                                                                                                                 | [operations.UpdatePromptPromptsMetadata](../../models/operations/updatepromptpromptsmetadata.md)                                                           | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |