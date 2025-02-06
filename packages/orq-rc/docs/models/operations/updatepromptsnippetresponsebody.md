# UpdatePromptSnippetResponseBody

Prompt snippet model returned from the API

## Example Usage

```typescript
import { UpdatePromptSnippetResponseBody } from "@orq-ai/node/models/operations";

let value: UpdatePromptSnippetResponseBody = {
  id: "<id>",
  owner: "<value>",
  domainId: "dca53ad0-a7e5-4782-bbd0-40faf8c556a5",
  key: "<key>",
  promptConfig: {
    messages: [
      {
        role: "expected_output",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  createdById: "31037d37-eac8-4f90-8369-c6bc5fae8bce",
  updatedById: "86e1fe17-bbec-447b-9237-4d95dcfd62d0",
  type: "snippet",
  versions: [
    {
      id: "<id>",
      promptConfig: {
        messages: [
          {
            role: "expected_output",
            content: [
              {
                type: "image_url",
                imageUrl: {
                  url: "https://artistic-lawmaker.name",
                },
              },
            ],
          },
        ],
      },
      metadata: {},
      createdById: "513569b5-5004-4bac-acdb-fe990f2bd531",
      updatedById: "7be2e64f-f3a1-4ada-b666-9ee021358abe",
      timestamp: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                               | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `owner`                                                                                                                                                            | *operations.UpdatePromptSnippetOwner*                                                                                                                              | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `domainId`                                                                                                                                                         | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `key`                                                                                                                                                              | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `description`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | The prompt snippet’s description, meant to be displayable in the UI. Use this field to optionally store a long form explanation of the prompt for your own purpose |
| `promptConfig`                                                                                                                                                     | [operations.UpdatePromptSnippetPromptSnippetsPromptConfig](../../models/operations/updatepromptsnippetpromptsnippetspromptconfig.md)                               | :heavy_check_mark:                                                                                                                                                 | A list of messages compatible with the openAI schema                                                                                                               |
| `metadata`                                                                                                                                                         | [operations.UpdatePromptSnippetPromptSnippetsMetadata](../../models/operations/updatepromptsnippetpromptsnippetsmetadata.md)                                       | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `createdById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `updatedById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `created`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_minus_sign:                                                                                                                                                 | The date and time the resource was created                                                                                                                         |
| `updated`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_minus_sign:                                                                                                                                                 | The date and time the resource was last updated                                                                                                                    |
| `type`                                                                                                                                                             | [operations.UpdatePromptSnippetPromptSnippetsType](../../models/operations/updatepromptsnippetpromptsnippetstype.md)                                               | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `versions`                                                                                                                                                         | [operations.UpdatePromptSnippetVersions](../../models/operations/updatepromptsnippetversions.md)[]                                                                 | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |