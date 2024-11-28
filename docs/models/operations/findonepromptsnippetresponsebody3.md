# FindOnePromptSnippetResponseBody3

Prompt template model returned from the API

## Example Usage

```typescript
import { FindOnePromptSnippetResponseBody3 } from "@orq-ai/node/models/operations";

let value: FindOnePromptSnippetResponseBody3 = {
  id: "<id>",
  owner: "vendor",
  domainId: "8bf6e009-4345-4b9c-bdd6-6ea185f09b4f",
  createdById: "e094da81-8af9-4ffa-a87e-011c5a968af9",
  displayName: "Annamarie.Legros-Schmitt42",
  updatedById: "4c970ff3-08fe-4945-9e72-3417ea1045cf",
  promptConfig: {
    messages: [
      {
        role: "prompt",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://boiling-fellow.org",
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
      createdById: "3db588b8-2c6f-4445-a9e2-4977de7ac84a",
      displayName: "Stephen_Vandervort",
      updatedById: "b7f65d8a-ca61-49e6-be89-d91f3b873b1f",
      promptConfig: {
        messages: [
          {
            role: "tool",
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