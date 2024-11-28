# GetAllPromptsItems3

Prompt template model returned from the API

## Example Usage

```typescript
import { GetAllPromptsItems3 } from "@orq-ai/node/models/operations";

let value: GetAllPromptsItems3 = {
  id: "<id>",
  owner: "<value>",
  domainId: "4eeb0a34-2973-4e3c-b02d-8a6622e77a08",
  createdById: "667d9bb0-fb90-4e7e-a69e-7266bd0742ad",
  displayName: "Clementina_Lebsack",
  updatedById: "54bf479f-3f8b-4c2f-afdd-5de42c9165a6",
  promptConfig: {
    messages: [
      {
        role: "correction",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://experienced-lady.net",
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
      createdById: "33ace7b2-5a2f-42c5-ab6b-e92f836bee2d",
      displayName: "Halie_Schimmel65",
      updatedById: "c067846c-4d02-4e70-a971-59ae71162e36",
      promptConfig: {
        messages: [
          {
            role: "user",
            content: [
              {
                type: "image_url",
                imageUrl: {
                  url: "https://swift-newsletter.info",
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

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `owner`                                                                                                                              | *operations.GetAllPromptsItemsPromptsResponseOwner*                                                                                  | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `domainId`                                                                                                                           | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `createdById`                                                                                                                        | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `displayName`                                                                                                                        | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `updatedById`                                                                                                                        | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `description`                                                                                                                        | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `promptConfig`                                                                                                                       | [operations.GetAllPromptsItemsPromptsResponsePromptConfig](../../models/operations/getallpromptsitemspromptsresponsepromptconfig.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `metadata`                                                                                                                           | [operations.GetAllPromptsItemsPromptsResponseMetadata](../../models/operations/getallpromptsitemspromptsresponsemetadata.md)         | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `created`                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                        | :heavy_minus_sign:                                                                                                                   | The date and time the resource was created                                                                                           |
| `updated`                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                        | :heavy_minus_sign:                                                                                                                   | The date and time the resource was last updated                                                                                      |
| `versions`                                                                                                                           | [operations.GetAllPromptsItemsPromptsResponseVersions](../../models/operations/getallpromptsitemspromptsresponseversions.md)[]       | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `type`                                                                                                                               | [operations.GetAllPromptsItemsPromptsResponseType](../../models/operations/getallpromptsitemspromptsresponsetype.md)                 | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |