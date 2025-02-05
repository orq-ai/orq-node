# GetAllPromptsData

Prompt model returned from the API

## Example Usage

```typescript
import { GetAllPromptsData } from "@orq-ai/node/models/operations";

let value: GetAllPromptsData = {
  id: "<id>",
  owner: "vendor",
  domainId: "cc1abd87-fc85-4d71-b7d7-09fd9ed79bd0",
  createdById: "7ac8261b-fc69-4484-ab4f-a10f353ea885",
  displayName: "Heber.OKon",
  updatedById: "8c7fcdf6-9baf-444e-8c39-b5697c0659c1",
  promptConfig: {
    messages: [
      {
        role: "prompt",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://marvelous-challenge.net",
            },
          },
        ],
      },
    ],
  },
  metadata: {},
  type: "prompt",
  versions: [
    {
      id: "<id>",
      createdById: "998f2123-9937-477c-97c2-8d2792c1f751",
      displayName: "Magdalena_Haag64",
      updatedById: "2e42f417-6e21-41e7-8298-3953843e2464",
      promptConfig: {
        messages: [
          {
            role: "correction",
            content: "<value>",
          },
        ],
      },
      metadata: {},
      timestamp: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                       | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `owner`                                                                                                                                                    | *operations.GetAllPromptsOwner*                                                                                                                            | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `domainId`                                                                                                                                                 | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `createdById`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `displayName`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | The prompt’s name, meant to be displayable in the UI.                                                                                                      |
| `updatedById`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `description`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | The prompt’s description, meant to be displayable in the UI. Use this field to optionally store a long form explanation of the prompt for your own purpose |
| `promptConfig`                                                                                                                                             | [operations.GetAllPromptsPromptConfig](../../models/operations/getallpromptspromptconfig.md)                                                               | :heavy_check_mark:                                                                                                                                         | A list of messages compatible with the openAI schema                                                                                                       |
| `metadata`                                                                                                                                                 | [operations.GetAllPromptsMetadata](../../models/operations/getallpromptsmetadata.md)                                                                       | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `created`                                                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                              | :heavy_minus_sign:                                                                                                                                         | The date and time the resource was created                                                                                                                 |
| `updated`                                                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                              | :heavy_minus_sign:                                                                                                                                         | The date and time the resource was last updated                                                                                                            |
| `type`                                                                                                                                                     | [operations.GetAllPromptsType](../../models/operations/getallpromptstype.md)                                                                               | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `versions`                                                                                                                                                 | [operations.GetAllPromptsVersions](../../models/operations/getallpromptsversions.md)[]                                                                     | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |