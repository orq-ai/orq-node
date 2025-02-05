# FindOneByKeyPromptSnippetResponseBody

Prompt snippet model returned from the API

## Example Usage

```typescript
import { FindOneByKeyPromptSnippetResponseBody } from "@orq-ai/node/models/operations";

let value: FindOneByKeyPromptSnippetResponseBody = {
  id: "<id>",
  owner: "vendor",
  domainId: "990f2bd5-31b7-4be2-be64-ff3a1ada6669",
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
  createdById: "21358abe-fadc-44e0-b047-a1ac2687cfc1",
  updatedById: "13238a7f-3cd8-4796-9866-b12dc46ed930",
  type: "snippet",
  versions: [
    {
      id: "<id>",
      promptConfig: {
        messages: [
          {
            role: "prompt",
            content: [
              {
                type: "image_url",
                imageUrl: {
                  url: "https://exhausted-flat.biz/",
                },
              },
            ],
          },
        ],
      },
      metadata: {},
      createdById: "cc8f2e12-b196-4bec-bd04-8634f450d234",
      updatedById: "3cce13b3-4227-4156-8061-7dd19d3cec10",
      timestamp: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                               | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `owner`                                                                                                                                                            | *operations.FindOneByKeyPromptSnippetOwner*                                                                                                                        | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `domainId`                                                                                                                                                         | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `key`                                                                                                                                                              | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `description`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | The prompt snippet’s description, meant to be displayable in the UI. Use this field to optionally store a long form explanation of the prompt for your own purpose |
| `promptConfig`                                                                                                                                                     | [operations.FindOneByKeyPromptSnippetPromptConfig](../../models/operations/findonebykeypromptsnippetpromptconfig.md)                                               | :heavy_check_mark:                                                                                                                                                 | A list of messages compatible with the openAI schema                                                                                                               |
| `metadata`                                                                                                                                                         | [operations.FindOneByKeyPromptSnippetMetadata](../../models/operations/findonebykeypromptsnippetmetadata.md)                                                       | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `createdById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `updatedById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `created`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_minus_sign:                                                                                                                                                 | The date and time the resource was created                                                                                                                         |
| `updated`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_minus_sign:                                                                                                                                                 | The date and time the resource was last updated                                                                                                                    |
| `type`                                                                                                                                                             | [operations.FindOneByKeyPromptSnippetType](../../models/operations/findonebykeypromptsnippettype.md)                                                               | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `versions`                                                                                                                                                         | [operations.FindOneByKeyPromptSnippetVersions](../../models/operations/findonebykeypromptsnippetversions.md)[]                                                     | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |