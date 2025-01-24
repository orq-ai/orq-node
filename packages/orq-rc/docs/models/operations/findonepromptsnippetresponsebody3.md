# FindOnePromptSnippetResponseBody3

Prompt template model returned from the API

## Example Usage

```typescript
import { FindOnePromptSnippetResponseBody3 } from "@orq-ai/node/models/operations";

let value: FindOnePromptSnippetResponseBody3 = {
  id: "<id>",
  owner: "<value>",
  domainId: "d9565ca1-c755-4242-b78f-c852682ea6c2",
  createdById: "0682af10-bc65-45d0-9c2d-8d2238744c1e",
  displayName: "Nicholaus0",
  updatedById: "9a9350e7-20c5-4487-b905-f3518666b747",
  promptConfig: {
    messages: [
      {
        role: "exception",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  versions: [
    {
      id: "<id>",
      createdById: "de50c58c-74de-4b00-b9c2-eeca51f42f9f",
      displayName: "Eileen.Mohr",
      updatedById: "1280c61d-12ce-4007-96f7-b52b79c5781b",
      promptConfig: {
        messages: [
          {
            role: "tool",
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
  type: "template",
};
```

## Fields

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `owner`                                                                                                                                                                        | *operations.FindOnePromptSnippetResponseBodyPromptSnippetsResponseOwner*                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `domainId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `createdById`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `displayName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `updatedById`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `description`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `promptConfig`                                                                                                                                                                 | [operations.FindOnePromptSnippetResponseBodyPromptSnippetsResponsePromptConfig](../../models/operations/findonepromptsnippetresponsebodypromptsnippetsresponsepromptconfig.md) | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `metadata`                                                                                                                                                                     | [operations.FindOnePromptSnippetResponseBodyPromptSnippetsResponseMetadata](../../models/operations/findonepromptsnippetresponsebodypromptsnippetsresponsemetadata.md)         | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `created`                                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                  | :heavy_minus_sign:                                                                                                                                                             | The date and time the resource was created                                                                                                                                     |
| `updated`                                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                  | :heavy_minus_sign:                                                                                                                                                             | The date and time the resource was last updated                                                                                                                                |
| `versions`                                                                                                                                                                     | [operations.FindOnePromptSnippetResponseBodyPromptSnippetsResponseVersions](../../models/operations/findonepromptsnippetresponsebodypromptsnippetsresponseversions.md)[]       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `type`                                                                                                                                                                         | [operations.FindOnePromptSnippetResponseBodyPromptSnippetsResponseType](../../models/operations/findonepromptsnippetresponsebodypromptsnippetsresponsetype.md)                 | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |