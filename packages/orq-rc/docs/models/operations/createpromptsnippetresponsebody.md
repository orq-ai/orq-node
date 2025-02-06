# CreatePromptSnippetResponseBody

Prompt snippet model returned from the API

## Example Usage

```typescript
import { CreatePromptSnippetResponseBody } from "@orq-ai/node/models/operations";

let value: CreatePromptSnippetResponseBody = {
  id: "<id>",
  owner: "vendor",
  domainId: "5a4fb5c1-63a1-4648-b5b0-a34cf5d1ac26",
  key: "<key>",
  promptConfig: {
    messages: [
      {
        role: "system",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  createdById: "96ce4679-fb64-4f2b-aea6-35baedde4568",
  updatedById: "4064feda-58d1-4c0d-bc0a-822c9fff1f37",
  type: "snippet",
  versions: [
    {
      id: "<id>",
      promptConfig: {
        messages: [
          {
            role: "assistant",
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
      createdById: "11506a61-142f-42c9-b98f-5c86f916cbe4",
      updatedById: "79ffd5ea-60c8-4cbc-b4c8-7a014f25055f",
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
| `description`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | The prompt snippet’s description, meant to be displayable in the UI. Use this field to optionally store a long form explanation of the prompt for your own purpose |
| `promptConfig`                                                                                                                                                     | [operations.CreatePromptSnippetPromptConfig](../../models/operations/createpromptsnippetpromptconfig.md)                                                           | :heavy_check_mark:                                                                                                                                                 | A list of messages compatible with the openAI schema                                                                                                               |
| `metadata`                                                                                                                                                         | [operations.CreatePromptSnippetPromptSnippetsMetadata](../../models/operations/createpromptsnippetpromptsnippetsmetadata.md)                                       | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `createdById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `updatedById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `created`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_minus_sign:                                                                                                                                                 | The date and time the resource was created                                                                                                                         |
| `updated`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_minus_sign:                                                                                                                                                 | The date and time the resource was last updated                                                                                                                    |
| `type`                                                                                                                                                             | [operations.CreatePromptSnippetPromptSnippetsType](../../models/operations/createpromptsnippetpromptsnippetstype.md)                                               | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `versions`                                                                                                                                                         | [operations.Versions](../../models/operations/versions.md)[]                                                                                                       | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |