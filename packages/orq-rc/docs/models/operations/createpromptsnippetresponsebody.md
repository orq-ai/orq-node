# CreatePromptSnippetResponseBody

Prompt snippet model returned from the API

## Example Usage

```typescript
import { CreatePromptSnippetResponseBody } from "@orq-ai/node/models/operations";

let value: CreatePromptSnippetResponseBody = {
  id: "<id>",
  owner: "vendor",
  domainId: "5308d531-1314-411d-b28c-723685cce0e6",
  key: "<key>",
  displayName: "Maryse_Rowe-Hickle",
  promptConfig: {
    messages: [
      {
        role: "user",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  createdById: "a48120f0-291e-4bf8-b48e-84e5035d775e",
  updatedById: "f6fca332-e477-4cd2-96dd-1241619391fe",
  type: "snippet",
  versions: [
    {
      id: "<id>",
      displayName: "Deangelo.Kub",
      promptConfig: {
        messages: [
          {
            role: "exception",
            content: [
              {
                type: "image_url",
                imageUrl: {
                  url: "https://hairy-technologist.net",
                },
              },
            ],
          },
        ],
      },
      metadata: {},
      createdById: "594d1326-b870-4613-9e3d-c291bac7e04b",
      updatedById: "21d7eb65-8eb0-4beb-8272-5ee459f24d7e",
      timestamp: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                               | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `owner`                                                                                                                                                            | *operations.Owner*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `domainId`                                                                                                                                                         | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `key`                                                                                                                                                              | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `displayName`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | The prompt snippet’s name, meant to be displayable in the UI.                                                                                                      |
| `description`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | The prompt snippet’s description, meant to be displayable in the UI. Use this field to optionally store a long form explanation of the prompt for your own purpose |
| `promptConfig`                                                                                                                                                     | [operations.CreatePromptSnippetPromptConfig](../../models/operations/createpromptsnippetpromptconfig.md)                                                           | :heavy_check_mark:                                                                                                                                                 | A list of messages compatible with the openAI schema                                                                                                               |
| `metadata`                                                                                                                                                         | [operations.CreatePromptSnippetPromptSnippetsMetadata](../../models/operations/createpromptsnippetpromptsnippetsmetadata.md)                                       | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `createdById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `updatedById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `created`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_minus_sign:                                                                                                                                                 | The date and time the resource was created                                                                                                                         |
| `updated`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_minus_sign:                                                                                                                                                 | The date and time the resource was last updated                                                                                                                    |
| `type`                                                                                                                                                             | [operations.CreatePromptSnippetPromptSnippetsType](../../models/operations/createpromptsnippetpromptsnippetstype.md)                                               | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `versions`                                                                                                                                                         | [operations.Versions](../../models/operations/versions.md)[]                                                                                                       | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |