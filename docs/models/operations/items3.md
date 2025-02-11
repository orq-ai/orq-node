# Items3

Prompt template model returned from the API

## Example Usage

```typescript
import { Items3 } from "@orq-ai/node/models/operations";

let value: Items3 = {
  id: "<id>",
  owner: "<value>",
  domainId: "47a48120-f029-41eb-9f84-8e84e5035d77",
  createdById: "eff6fca3-32e4-477c-bd26-dd1241619391",
  displayName: "Torey.Flatley48",
  updatedById: "a66cbf5e-c594-4d13-826b-870613e3dc29",
  promptConfig: {
    messages: [
      {
        role: "prompt",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://unwritten-asset.biz/",
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
      createdById: "b621d7eb-658e-4b0b-9eb2-725ee459f24d",
      displayName: "Stanton.Lemke",
      updatedById: "65ebb49c-c5cb-42d7-8779-97da66c530ee",
      promptConfig: {
        messages: [
          {
            role: "user",
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

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                 | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `owner`                                                                                                                                              | *operations.GetAllPromptTemplatesItemsOwner*                                                                                                         | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `domainId`                                                                                                                                           | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `createdById`                                                                                                                                        | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `displayName`                                                                                                                                        | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `updatedById`                                                                                                                                        | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `description`                                                                                                                                        | *string*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | N/A                                                                                                                                                  |
| `promptConfig`                                                                                                                                       | [operations.GetAllPromptTemplatesItemsPromptTemplatesPromptConfig](../../models/operations/getallprompttemplatesitemsprompttemplatespromptconfig.md) | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `metadata`                                                                                                                                           | [operations.GetAllPromptTemplatesItemsPromptTemplatesMetadata](../../models/operations/getallprompttemplatesitemsprompttemplatesmetadata.md)         | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `created`                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                        | :heavy_minus_sign:                                                                                                                                   | The date and time the resource was created                                                                                                           |
| `updated`                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                        | :heavy_minus_sign:                                                                                                                                   | The date and time the resource was last updated                                                                                                      |
| `versions`                                                                                                                                           | [operations.GetAllPromptTemplatesItemsVersions](../../models/operations/getallprompttemplatesitemsversions.md)[]                                     | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `type`                                                                                                                                               | [operations.GetAllPromptTemplatesItemsPromptTemplatesType](../../models/operations/getallprompttemplatesitemsprompttemplatestype.md)                 | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |