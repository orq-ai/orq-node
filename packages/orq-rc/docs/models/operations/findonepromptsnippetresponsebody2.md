# FindOnePromptSnippetResponseBody2

Prompt snippet model returned from the API

## Example Usage

```typescript
import { FindOnePromptSnippetResponseBody2 } from "@orq-ai/node/models/operations";

let value: FindOnePromptSnippetResponseBody2 = {
  id: "<id>",
  owner: "<value>",
  domainId: "e27df2b1-9c59-4545-8a9e-d998a6f02229",
  createdById: "12cda6bd-5ab6-4076-be1f-be3a3c064ce0",
  displayName: "Cara69",
  updatedById: "46976ec8-5bd4-4e65-b92e-c1eeaecbe441",
  promptConfig: {
    messages: [
      {
        role: "expected_output",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://last-publicity.info",
            },
          },
        ],
      },
    ],
  },
  metadata: {},
  versions: [
    {
      id: "<id>",
      createdById: "4f6d956d-3714-425b-a677-921f4c8a0adc",
      displayName: "Ali_Goldner",
      updatedById: "c53a1461-18be-4e69-8114-a15f3c0b6a0c",
      promptConfig: {
        messages: [
          {
            role: "user",
            content: [
              {
                type: "image_url",
                imageUrl: {
                  url: "https://tense-babushka.biz/",
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
  key: "<key>",
  type: "snippet",
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                           | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `owner`                                                                                                                                                        | *operations.FindOnePromptSnippetResponseBodyPromptSnippetsOwner*                                                                                               | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `domainId`                                                                                                                                                     | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `createdById`                                                                                                                                                  | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `displayName`                                                                                                                                                  | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `updatedById`                                                                                                                                                  | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `description`                                                                                                                                                  | *string*                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                             | N/A                                                                                                                                                            |
| `promptConfig`                                                                                                                                                 | [operations.FindOnePromptSnippetResponseBodyPromptSnippetsPromptConfig](../../models/operations/findonepromptsnippetresponsebodypromptsnippetspromptconfig.md) | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `metadata`                                                                                                                                                     | [operations.FindOnePromptSnippetResponseBodyPromptSnippetsMetadata](../../models/operations/findonepromptsnippetresponsebodypromptsnippetsmetadata.md)         | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `created`                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                  | :heavy_minus_sign:                                                                                                                                             | The date and time the resource was created                                                                                                                     |
| `updated`                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                  | :heavy_minus_sign:                                                                                                                                             | The date and time the resource was last updated                                                                                                                |
| `versions`                                                                                                                                                     | [operations.FindOnePromptSnippetResponseBodyPromptSnippetsVersions](../../models/operations/findonepromptsnippetresponsebodypromptsnippetsversions.md)[]       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `key`                                                                                                                                                          | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `type`                                                                                                                                                         | [operations.FindOnePromptSnippetResponseBodyPromptSnippetsType](../../models/operations/findonepromptsnippetresponsebodypromptsnippetstype.md)                 | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |