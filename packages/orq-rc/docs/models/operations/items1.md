# Items1

Prompt model returned from the API

## Example Usage

```typescript
import { Items1 } from "@orq-ai/node/models/operations";

let value: Items1 = {
  id: "<id>",
  owner: "vendor",
  domainId: "2b6332f6-96cc-40af-8d49-798b5690472b",
  createdById: "bdaeb3d3-d989-4647-8298-aae80e1b31f0",
  displayName: "Isidro_Dare",
  updatedById: "1dfd9d67-15ed-49e6-8ff9-0eef741ebccd",
  promptConfig: {
    messages: [
      {
        role: "user",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://smoggy-basket.net",
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
      createdById: "1d53317c-afcb-4616-9d51-891c890371b3",
      displayName: "Alexie_Stanton73",
      updatedById: "39331c1e-d2f5-4e12-8704-92161ac71936",
      promptConfig: {
        messages: [
          {
            role: "prompt",
            content: [
              {
                type: "image_url",
                imageUrl: {
                  url: "https://negative-marten.biz",
                },
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
  type: "prompt",
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                           | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `owner`                                                                                                                                        | *operations.GetAllPromptTemplatesItemsPromptTemplatesOwner*                                                                                    | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `domainId`                                                                                                                                     | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `createdById`                                                                                                                                  | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `displayName`                                                                                                                                  | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `updatedById`                                                                                                                                  | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `description`                                                                                                                                  | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `promptConfig`                                                                                                                                 | [operations.ItemsPromptConfig](../../models/operations/itemspromptconfig.md)                                                                   | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `metadata`                                                                                                                                     | [operations.ItemsMetadata](../../models/operations/itemsmetadata.md)                                                                           | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `created`                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                  | :heavy_minus_sign:                                                                                                                             | The date and time the resource was created                                                                                                     |
| `updated`                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                  | :heavy_minus_sign:                                                                                                                             | The date and time the resource was last updated                                                                                                |
| `versions`                                                                                                                                     | [operations.GetAllPromptTemplatesItemsPromptTemplatesVersions](../../models/operations/getallprompttemplatesitemsprompttemplatesversions.md)[] | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `type`                                                                                                                                         | [operations.ItemsType](../../models/operations/itemstype.md)                                                                                   | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |