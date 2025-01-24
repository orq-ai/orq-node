# FindOnePromptSnippetResponseBody1

Prompt model returned from the API

## Example Usage

```typescript
import { FindOnePromptSnippetResponseBody1 } from "@orq-ai/node/models/operations";

let value: FindOnePromptSnippetResponseBody1 = {
  id: "<id>",
  owner: "<value>",
  domainId: "d5cb9986-098b-437b-ad89-477212d71f29",
  createdById: "32e148b4-0980-485c-a588-f9a627b89c08",
  displayName: "Waino.Sanford",
  updatedById: "ffc9fd88-55c3-47ad-aa35-370719ddef0e",
  promptConfig: {
    messages: [
      {
        role: "correction",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  versions: [
    {
      id: "<id>",
      createdById: "18861001-0be3-4e81-ad7f-0530578c50ae",
      displayName: "Dashawn_Herzog82",
      updatedById: "2bae79d4-b317-40b3-9e06-6f6b08637eea",
      promptConfig: {
        messages: [
          {
            role: "correction",
            content: [
              {
                type: "image_url",
                imageUrl: {
                  url: "https://functional-majority.name",
                },
              },
            ],
          },
        ],
      },
      metadata: {},
      commit: "<value>",
      timestamp: "<value>",
    },
  ],
  type: "prompt",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `owner`                                                                                                                            | *operations.FindOnePromptSnippetResponseBodyOwner*                                                                                 | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `domainId`                                                                                                                         | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `createdById`                                                                                                                      | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `displayName`                                                                                                                      | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `updatedById`                                                                                                                      | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `description`                                                                                                                      | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `promptConfig`                                                                                                                     | [operations.FindOnePromptSnippetResponseBodyPromptConfig](../../models/operations/findonepromptsnippetresponsebodypromptconfig.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `metadata`                                                                                                                         | [operations.FindOnePromptSnippetResponseBodyMetadata](../../models/operations/findonepromptsnippetresponsebodymetadata.md)         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `created`                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                      | :heavy_minus_sign:                                                                                                                 | The date and time the resource was created                                                                                         |
| `updated`                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                      | :heavy_minus_sign:                                                                                                                 | The date and time the resource was last updated                                                                                    |
| `versions`                                                                                                                         | [operations.FindOnePromptSnippetResponseBodyVersions](../../models/operations/findonepromptsnippetresponsebodyversions.md)[]       | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `type`                                                                                                                             | [operations.FindOnePromptSnippetResponseBodyType](../../models/operations/findonepromptsnippetresponsebodytype.md)                 | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |