# Items1

Prompt model returned from the API

## Example Usage

```typescript
import { Items1 } from "@orq-ai/node/models/operations";

let value: Items1 = {
  id: "<id>",
  owner: "vendor",
  domainId: "6c83448b-fbc2-456a-a445-c9115cbbc488",
  createdById: "f4ca9cf0-2c18-434b-a0d7-88a515285ff9",
  displayName: "Winona.Runolfsdottir36",
  updatedById: "7fe10e83-aa14-4032-93a0-12544cf8f616",
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
  versions: [
    {
      id: "<id>",
      createdById: "eeb726b4-1eb9-4cd7-8ee4-988f4fe7dca5",
      displayName: "Margaret44",
      updatedById: "5782bd04-0faf-48c5-b56a-5ef031037d37",
      promptConfig: {
        messages: [
          {
            role: "prompt",
            content: [
              {
                type: "image_url",
                imageUrl: {
                  url: "https://oval-arcade.biz",
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