# Data2

Prompt snippet model returned from the API

## Example Usage

```typescript
import { Data2 } from "@orq-ai/node/models/operations";

let value: Data2 = {
  id: "<id>",
  owner: "<value>",
  domainId: "18537fa4-f4b4-4ca9-9739-d0be945b5014",
  createdById: "5c36dc35-2185-4899-af3e-001a8228f241",
  displayName: "Tiffany_Kozey",
  updatedById: "abb743e0-5b96-412b-b755-6a91210cd6fd",
  promptConfig: {
    messages: [
      {
        role: "user",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://unhealthy-accelerator.name/",
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
      createdById: "81d467d9-9547-4457-bded-8b57f527a214",
      displayName: "Marguerite52",
      updatedById: "03f71409-f995-438e-a096-9d736216a4eb",
      promptConfig: {
        messages: [
          {
            role: "prompt",
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

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `owner`                                                                                              | *operations.GetAllPromptsDataOwner*                                                                  | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `domainId`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `createdById`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `displayName`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `updatedById`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `description`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `promptConfig`                                                                                       | [operations.GetAllPromptsDataPromptConfig](../../models/operations/getallpromptsdatapromptconfig.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `metadata`                                                                                           | [operations.GetAllPromptsDataMetadata](../../models/operations/getallpromptsdatametadata.md)         | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `created`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | The date and time the resource was created                                                           |
| `updated`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | The date and time the resource was last updated                                                      |
| `versions`                                                                                           | [operations.GetAllPromptsDataVersions](../../models/operations/getallpromptsdataversions.md)[]       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `key`                                                                                                | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `type`                                                                                               | [operations.GetAllPromptsDataType](../../models/operations/getallpromptsdatatype.md)                 | :heavy_check_mark:                                                                                   | N/A                                                                                                  |