# FindOnePromptSnippetResponseBody2

Prompt snippet model returned from the API

## Example Usage

```typescript
import { FindOnePromptSnippetResponseBody2 } from "@orq-ai/node/models/operations";

let value: FindOnePromptSnippetResponseBody2 = {
  id: "<id>",
  owner: "vendor",
  domainId: "7ac8261b-fc69-4484-ab4f-a10f353ea885",
  createdById: "63a5c68c-7fcd-4f69-8baf-44ec39b5697c",
  displayName: "Howard_Monahan7",
  updatedById: "ab9f72a9-98f2-4123-8993-777c7c28d279",
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
      createdById: "f7516a14-da32-4e42-af41-76e211e72983",
      displayName: "Eusebio22",
      updatedById: "24643c51-825e-45a8-92ad-1cbd14b0bd76",
      promptConfig: {
        messages: [
          {
            role: "system",
            content: "<value>",
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