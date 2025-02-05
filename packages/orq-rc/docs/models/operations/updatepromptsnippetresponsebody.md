# UpdatePromptSnippetResponseBody

Prompt snippet model returned from the API

## Example Usage

```typescript
import { UpdatePromptSnippetResponseBody } from "@orq-ai/node/models/operations";

let value: UpdatePromptSnippetResponseBody = {
  id: "<id>",
  owner: "vendor",
  domainId: "907b0e80-3f91-4470-9673-9c39afcd72f2",
  key: "<key>",
  promptConfig: {
    messages: [
      {
        role: "system",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://gullible-disclosure.biz",
            },
          },
        ],
      },
    ],
  },
  metadata: {},
  createdById: "2825ab06-ad7f-4407-b4d3-4cb8b600810f",
  updatedById: "20f42b14-fa86-4c2f-ad90-be851ce1c0f9",
  type: "snippet",
  versions: [
    {
      id: "<id>",
      promptConfig: {
        messages: [
          {
            role: "user",
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
      createdById: "dfc81773-6527-4480-9ed8-df1aff92903f",
      updatedById: "a4fb5c16-3a16-4485-8b0a-34cf5d1ac26e",
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