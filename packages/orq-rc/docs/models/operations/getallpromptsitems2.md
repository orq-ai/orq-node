# GetAllPromptsItems2

Prompt snippet model returned from the API

## Example Usage

```typescript
import { GetAllPromptsItems2 } from "@orq-ai/node/models/operations";

let value: GetAllPromptsItems2 = {
  id: "<id>",
  owner: "<value>",
  domainId: "0841e394-9ab4-40df-ae1c-7a98a992dcfc",
  createdById: "ea429bd4-e9bc-4e46-9ed6-7b0538c2f7c5",
  displayName: "Violette25",
  updatedById: "ca1c22d0-1e4c-4a1c-a3b6-8f44459ce0a9",
  promptConfig: {
    messages: [
      {
        role: "correction",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://well-made-subsidy.biz/",
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
      createdById: "1cf2a00c-d57c-4d4c-937b-a8a04313de87",
      displayName: "Veronica.Emmerich",
      updatedById: "63edb7ef-e4d5-41bc-8f74-169725e78760",
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
      commit: "<value>",
      timestamp: "<value>",
    },
  ],
  key: "<key>",
  type: "snippet",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `owner`                                                                                                              | *operations.GetAllPromptsItemsPromptsOwner*                                                                          | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `domainId`                                                                                                           | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `createdById`                                                                                                        | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `displayName`                                                                                                        | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `updatedById`                                                                                                        | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `description`                                                                                                        | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `promptConfig`                                                                                                       | [operations.GetAllPromptsItemsPromptsPromptConfig](../../models/operations/getallpromptsitemspromptspromptconfig.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `metadata`                                                                                                           | [operations.GetAllPromptsItemsPromptsMetadata](../../models/operations/getallpromptsitemspromptsmetadata.md)         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `created`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_minus_sign:                                                                                                   | The date and time the resource was created                                                                           |
| `updated`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_minus_sign:                                                                                                   | The date and time the resource was last updated                                                                      |
| `versions`                                                                                                           | [operations.GetAllPromptsItemsPromptsVersions](../../models/operations/getallpromptsitemspromptsversions.md)[]       | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `key`                                                                                                                | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `type`                                                                                                               | [operations.GetAllPromptsItemsPromptsType](../../models/operations/getallpromptsitemspromptstype.md)                 | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |