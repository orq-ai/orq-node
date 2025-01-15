# FindOnePromptSnippetResponseBody3

Prompt template model returned from the API

## Example Usage

```typescript
import { FindOnePromptSnippetResponseBody3 } from "@orq-ai/node/models/operations";

let value: FindOnePromptSnippetResponseBody3 = {
  id: "<id>",
  owner: "vendor",
  domainId: "353f9b15-e12a-49de-b246-01374e5ef734",
  createdById: "4679f354-515e-445f-bb8c-1713256f47cd",
  displayName: "Eduardo43",
  updatedById: "8ed099f0-8309-4cc0-b603-3354f5e2c070",
  promptConfig: {
    messages: [
      {
        role: "expected_output",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  versions: [
    {
      id: "<id>",
      createdById: "ec5e461a-07ad-42cb-8891-96d596e41b69",
      displayName: "Vanessa37",
      updatedById: "a27f8094-1680-488c-a68b-e69b0c6a7bb3",
      promptConfig: {
        messages: [
          {
            role: "correction",
            content: "<value>",
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