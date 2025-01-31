# Versions

Prompt version model returned from the API

## Example Usage

```typescript
import { Versions } from "@orq-ai/node/models/operations";

let value: Versions = {
  id: "<id>",
  displayName: "Evie.Nikolaus",
  promptConfig: {
    messages: [
      {
        role: "system",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://muted-calculus.info",
            },
          },
        ],
      },
    ],
  },
  metadata: {},
  createdById: "650b19ba-f1d0-4868-8530-8d531131411d",
  updatedById: "8c723685-cce0-4e6e-bbfc-586547a48120",
  timestamp: "<value>",
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                               | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `displayName`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | The prompt snippet’s name, meant to be displayable in the UI.                                                                                                      |
| `description`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | The prompt snippet’s description, meant to be displayable in the UI. Use this field to optionally store a long form explanation of the prompt for your own purpose |
| `promptConfig`                                                                                                                                                     | [operations.CreatePromptSnippetPromptSnippetsPromptConfig](../../models/operations/createpromptsnippetpromptsnippetspromptconfig.md)                               | :heavy_check_mark:                                                                                                                                                 | A list of messages compatible with the openAI schema                                                                                                               |
| `metadata`                                                                                                                                                         | [operations.CreatePromptSnippetPromptSnippetsResponseMetadata](../../models/operations/createpromptsnippetpromptsnippetsresponsemetadata.md)                       | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `createdById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `updatedById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `timestamp`                                                                                                                                                        | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |