# GetAllPromptSnippetsData

Prompt snippet model returned from the API

## Example Usage

```typescript
import { GetAllPromptSnippetsData } from "@orq-ai/node/models/operations";

let value: GetAllPromptSnippetsData = {
  id: "<id>",
  owner: "<value>",
  domainId: "7932d071-7f6d-4146-96a5-ba6691dab816",
  key: "<key>",
  promptConfig: {
    messages: [
      {
        role: "user",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  createdById: "b19baf1d-0868-4530-98d5-31131411d28c",
  updatedById: "23685cce-0e6e-4bfc-a586-547a48120f02",
  type: "snippet",
  versions: [
    {
      id: "<id>",
      promptConfig: {
        messages: [
          {
            role: "system",
            content: [
              {
                type: "image_url",
                imageUrl: {
                  url: "https://mediocre-eternity.name",
                },
              },
            ],
          },
        ],
      },
      metadata: {},
      createdById: "e84e5035-d775-4eff-b6fc-a332e477cd26",
      updatedById: "d1241619-391f-4e63-b470-a66cbf5ec594",
      timestamp: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                               | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `owner`                                                                                                                                                            | *operations.GetAllPromptSnippetsOwner*                                                                                                                             | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `domainId`                                                                                                                                                         | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `key`                                                                                                                                                              | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `description`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | The prompt snippet’s description, meant to be displayable in the UI. Use this field to optionally store a long form explanation of the prompt for your own purpose |
| `promptConfig`                                                                                                                                                     | [operations.GetAllPromptSnippetsPromptConfig](../../models/operations/getallpromptsnippetspromptconfig.md)                                                         | :heavy_check_mark:                                                                                                                                                 | A list of messages compatible with the openAI schema                                                                                                               |
| `metadata`                                                                                                                                                         | [operations.GetAllPromptSnippetsMetadata](../../models/operations/getallpromptsnippetsmetadata.md)                                                                 | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `createdById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `updatedById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `created`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_minus_sign:                                                                                                                                                 | The date and time the resource was created                                                                                                                         |
| `updated`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_minus_sign:                                                                                                                                                 | The date and time the resource was last updated                                                                                                                    |
| `type`                                                                                                                                                             | [operations.GetAllPromptSnippetsType](../../models/operations/getallpromptsnippetstype.md)                                                                         | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `versions`                                                                                                                                                         | [operations.GetAllPromptSnippetsVersions](../../models/operations/getallpromptsnippetsversions.md)[]                                                               | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |