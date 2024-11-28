# Items1

Prompt model returned from the API

## Example Usage

```typescript
import { Items1 } from "@orq-ai/node/models/operations";

let value: Items1 = {
  id: "<id>",
  owner: "<value>",
  domainId: "e1096ce4-679f-4b64-9f2b-ea635baedde4",
  createdById: "68a4064f-eda5-48d1-bc0d-c0a822c9fff1",
  displayName: "Deion.Rosenbaum56",
  updatedById: "11506a61-142f-42c9-b98f-5c86f916cbe4",
  promptConfig: {
    messages: [
      {
        role: "exception",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://total-fort.org",
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
      createdById: "a60c8cbc-4c87-4a01-84f2-5055fd60da2f",
      displayName: "Sandra67",
      updatedById: "91ecb062-dbef-4cf9-b005-ddf10e48f6a6",
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