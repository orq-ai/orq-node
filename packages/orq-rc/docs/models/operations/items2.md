# Items2

Prompt snippet model returned from the API

## Example Usage

```typescript
import { Items2 } from "@orq-ai/node/models/operations";

let value: Items2 = {
  id: "<id>",
  owner: "vendor",
  domainId: "11222049-f6d3-4f00-85e9-0d261e0e2332",
  createdById: "d653e953-e31a-4429-8729-ab485e798fef",
  displayName: "Jaylin_Prohaska",
  updatedById: "7c7ada57-7f6e-4eb3-86a4-279a94563372",
  promptConfig: {
    messages: [
      {
        role: "tool",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  versions: [
    {
      id: "<id>",
      createdById: "6bf74a2e-c21e-4f42-abf4-55748d64e835",
      displayName: "Ashtyn47",
      updatedById: "9cec4106-0b7b-470d-be9b-0b154d7137f3",
      promptConfig: {
        messages: [
          {
            role: "assistant",
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