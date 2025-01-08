# Items2

Prompt snippet model returned from the API

## Example Usage

```typescript
import { Items2 } from "@orq-ai/node/models/operations";

let value: Items2 = {
  id: "<id>",
  owner: "<value>",
  domainId: "42825ab0-6ad7-4f40-b74d-34cb8b600810",
  createdById: "d20f42b1-4fa8-46c2-afd9-0be851ce1c0f",
  displayName: "Kattie82",
  updatedById: "c8177365-2748-40ed-98df-1aff92903f5a",
  promptConfig: {
    messages: [
      {
        role: "expected_output",
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
      createdById: "c163a164-85b0-4a34-bcf5-d1ac26e1096c",
      displayName: "Eliezer98",
      updatedById: "64f2bea6-35ba-4edd-ae45-68a4064feda5",
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