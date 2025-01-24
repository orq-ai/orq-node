# GetAllPromptsData3

Prompt template model returned from the API

## Example Usage

```typescript
import { GetAllPromptsData3 } from "@orq-ai/node/models/operations";

let value: GetAllPromptsData3 = {
  id: "<id>",
  owner: "<value>",
  domainId: "0807af07-df11-4ff3-9137-bbaf092cda12",
  createdById: "e3ef0243-b927-470b-a226-acf7f9a559de",
  displayName: "Fiona_Becker",
  updatedById: "822074f1-10e2-444f-a080-b75270ebc9ef",
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
      createdById: "d5eb44aa-09a2-4e3c-a063-3607bae187dc",
      displayName: "Ramiro.Hoppe83",
      updatedById: "eb88f367-7dce-43a8-8869-a6853bc7c48a",
      promptConfig: {
        messages: [
          {
            role: "assistant",
            content: [
              {
                type: "image_url",
                imageUrl: {
                  url: "https://hidden-straw.biz",
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