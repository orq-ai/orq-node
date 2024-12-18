# Items2

Prompt snippet model returned from the API

## Example Usage

```typescript
import { Items2 } from "@orq-ai/node/models/operations";

let value: Items2 = {
  id: "<id>",
  owner: "<value>",
  domainId: "5ee459f2-4d7e-4285-b576-5ebb49cc5cb2",
  createdById: "777997da-66c5-430e-ae15-21e0f1d955c5",
  displayName: "Joseph82",
  updatedById: "0c3e0517-d425-4d23-a1b6-4b5bd3f24257",
  promptConfig: {
    messages: [
      {
        role: "correction",
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
  versions: [
    {
      id: "<id>",
      createdById: "917557b1-eb2f-48f3-9844-9ecb8e7dd3c0",
      displayName: "Daphnee51",
      updatedById: "3a907b0e-803f-4914-b706-739c39afcd72",
      promptConfig: {
        messages: [
          {
            role: "assistant",
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

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `owner`                                                                                                                | *operations.ItemsOwner*                                                                                                | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `domainId`                                                                                                             | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `createdById`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `displayName`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `updatedById`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `description`                                                                                                          | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `promptConfig`                                                                                                         | [operations.GetAllPromptTemplatesItemsPromptConfig](../../models/operations/getallprompttemplatesitemspromptconfig.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `metadata`                                                                                                             | [operations.GetAllPromptTemplatesItemsMetadata](../../models/operations/getallprompttemplatesitemsmetadata.md)         | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `created`                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_minus_sign:                                                                                                     | The date and time the resource was created                                                                             |
| `updated`                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_minus_sign:                                                                                                     | The date and time the resource was last updated                                                                        |
| `versions`                                                                                                             | [operations.ItemsVersions](../../models/operations/itemsversions.md)[]                                                 | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `key`                                                                                                                  | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `type`                                                                                                                 | [operations.GetAllPromptTemplatesItemsType](../../models/operations/getallprompttemplatesitemstype.md)                 | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |