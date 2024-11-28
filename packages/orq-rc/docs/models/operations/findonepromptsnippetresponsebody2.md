# FindOnePromptSnippetResponseBody2

Prompt snippet model returned from the API

## Example Usage

```typescript
import { FindOnePromptSnippetResponseBody2 } from "@orq-ai/node/models/operations";

let value: FindOnePromptSnippetResponseBody2 = {
  id: "<id>",
  owner: "vendor",
  domainId: "6e41b690-fe90-46fa-a27f-8094168088c6",
  createdById: "be69b0c6-a7bb-43ad-a3ca-f4244cba3df8",
  displayName: "Jevon19",
  updatedById: "d75f3803-9a9d-4fc7-bd1a-82f59e81d5fe",
  promptConfig: {
    messages: [
      {
        role: "user",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://limp-advancement.net",
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
      createdById: "d3581164-67ff-42e1-a825-b6cbf8c55661",
      displayName: "Ava.Berge28",
      updatedById: "cb2acc1a-bd87-4fc8-a5d7-17d709fd9ed7",
      promptConfig: {
        messages: [
          {
            role: "prompt",
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