# FindOnePromptSnippetResponseBody

Prompt snippet model returned from the API

## Example Usage

```typescript
import { FindOnePromptSnippetResponseBody } from "@orq-ai/node/models/operations";

let value: FindOnePromptSnippetResponseBody = {
  id: "<id>",
  owner: "vendor",
  domainId: "4e2a1fbd-9798-47c2-b265-1dc8f1c453c2",
  key: "<key>",
  promptConfig: {
    messages: [
      {
        role: "prompt",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  createdById: "caeb8d48-4f30-4580-b8db-9ffd9709fd52",
  updatedById: "bfd81758-4dd5-496e-b2bf-23bc79371547",
  type: "snippet",
  versions: [
    {
      id: "<id>",
      promptConfig: {
        messages: [
          {
            role: "assistant",
            content: "<value>",
          },
        ],
      },
      metadata: {},
      createdById: "9f2e1773-57df-48d9-b536-80293d511e12",
      updatedById: "4ad9fb18-bc0b-4db8-978b-e9eb1844559a",
      timestamp: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                               | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `owner`                                                                                                                                                            | *operations.FindOnePromptSnippetOwner*                                                                                                                             | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `domainId`                                                                                                                                                         | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `key`                                                                                                                                                              | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `description`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | The prompt snippet’s description, meant to be displayable in the UI. Use this field to optionally store a long form explanation of the prompt for your own purpose |
| `promptConfig`                                                                                                                                                     | [operations.FindOnePromptSnippetPromptConfig](../../models/operations/findonepromptsnippetpromptconfig.md)                                                         | :heavy_check_mark:                                                                                                                                                 | A list of messages compatible with the openAI schema                                                                                                               |
| `metadata`                                                                                                                                                         | [operations.FindOnePromptSnippetMetadata](../../models/operations/findonepromptsnippetmetadata.md)                                                                 | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `createdById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `updatedById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `created`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_minus_sign:                                                                                                                                                 | The date and time the resource was created                                                                                                                         |
| `updated`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_minus_sign:                                                                                                                                                 | The date and time the resource was last updated                                                                                                                    |
| `type`                                                                                                                                                             | [operations.FindOnePromptSnippetType](../../models/operations/findonepromptsnippettype.md)                                                                         | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `versions`                                                                                                                                                         | [operations.FindOnePromptSnippetVersions](../../models/operations/findonepromptsnippetversions.md)[]                                                               | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |