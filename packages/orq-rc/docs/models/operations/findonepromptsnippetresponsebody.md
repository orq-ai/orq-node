# FindOnePromptSnippetResponseBody

Prompt snippet model returned from the API

## Example Usage

```typescript
import { FindOnePromptSnippetResponseBody } from "@orq-ai/node/models/operations";

let value: FindOnePromptSnippetResponseBody = {
  id: "<id>",
  owner: "<value>",
  domainId: "ff99fec5-537f-4e10-9e83-aa140323a012",
  key: "<key>",
  displayName: "Elias53",
  promptConfig: {
    messages: [
      {
        role: "exception",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  createdById: "647a7eeb-726b-441e-9b9c-d7ee4988f4fe",
  updatedById: "dca53ad0-a7e5-4782-bbd0-40faf8c556a5",
  type: "snippet",
  versions: [
    {
      id: "<id>",
      displayName: "Wilma.Dickinson4",
      promptConfig: {
        messages: [
          {
            role: "exception",
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
      createdById: "7eac8f90-369c-46bc-85fa-e8bce286e1fe",
      updatedById: "7bbec47b-2374-4d95-adcf-d62d05efab08",
      timestamp: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                               | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `owner`                                                                                                                                                            | *operations.FindOnePromptSnippetOwner*                                                                                                                             | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `domainId`                                                                                                                                                         | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `key`                                                                                                                                                              | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `displayName`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | The prompt snippet’s name, meant to be displayable in the UI.                                                                                                      |
| `description`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | The prompt snippet’s description, meant to be displayable in the UI. Use this field to optionally store a long form explanation of the prompt for your own purpose |
| `promptConfig`                                                                                                                                                     | [operations.FindOnePromptSnippetPromptConfig](../../models/operations/findonepromptsnippetpromptconfig.md)                                                         | :heavy_check_mark:                                                                                                                                                 | A list of messages compatible with the openAI schema                                                                                                               |
| `metadata`                                                                                                                                                         | [operations.FindOnePromptSnippetMetadata](../../models/operations/findonepromptsnippetmetadata.md)                                                                 | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `createdById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `updatedById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `created`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_minus_sign:                                                                                                                                                 | The date and time the resource was created                                                                                                                         |
| `updated`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_minus_sign:                                                                                                                                                 | The date and time the resource was last updated                                                                                                                    |
| `type`                                                                                                                                                             | [operations.FindOnePromptSnippetType](../../models/operations/findonepromptsnippettype.md)                                                                         | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `versions`                                                                                                                                                         | [operations.FindOnePromptSnippetVersions](../../models/operations/findonepromptsnippetversions.md)[]                                                               | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |