# Data3

Prompt template model returned from the API

## Example Usage

```typescript
import { Data3 } from "@orq-ai/node/models/operations";

let value: Data3 = {
  id: "<id>",
  owner: "vendor",
  domainId: "d41cf2a0-0cd5-47cd-a4c3-7ba8a04313de",
  createdById: "77ff3105-63ed-4b7e-8fe4-d51bcf741697",
  displayName: "Gabriella_Koelpin",
  updatedById: "037975cb-f0b0-44ec-9a60-47670a70f32c",
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
      createdById: "6033f4d6-da01-4013-bcb3-6d191f7e2f00",
      displayName: "Oren.Franecki",
      updatedById: "dd29f17c-f16c-49e1-a89d-d790b0a8f26d",
      promptConfig: {
        messages: [
          {
            role: "correction",
            content: [
              {
                type: "image_url",
                imageUrl: {
                  url: "https://awful-swim.biz",
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
  type: "template",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `owner`                                                                                                            | *operations.GetAllPromptsDataPromptsOwner*                                                                         | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `domainId`                                                                                                         | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `createdById`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `displayName`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `updatedById`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `description`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `promptConfig`                                                                                                     | [operations.GetAllPromptsDataPromptsPromptConfig](../../models/operations/getallpromptsdatapromptspromptconfig.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `metadata`                                                                                                         | [operations.GetAllPromptsDataPromptsMetadata](../../models/operations/getallpromptsdatapromptsmetadata.md)         | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `created`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_minus_sign:                                                                                                 | The date and time the resource was created                                                                         |
| `updated`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_minus_sign:                                                                                                 | The date and time the resource was last updated                                                                    |
| `versions`                                                                                                         | [operations.GetAllPromptsDataPromptsVersions](../../models/operations/getallpromptsdatapromptsversions.md)[]       | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `type`                                                                                                             | [operations.GetAllPromptsDataPromptsType](../../models/operations/getallpromptsdatapromptstype.md)                 | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |