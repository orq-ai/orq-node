# GetAllPromptsData2

Prompt snippet model returned from the API

## Example Usage

```typescript
import { GetAllPromptsData2 } from "@orq-ai/node/models/operations";

let value: GetAllPromptsData2 = {
  id: "<id>",
  owner: "<value>",
  domainId: "3911d673-6fec-408c-8fcc-0e36dbc93f30",
  createdById: "2b003bef-be88-4c46-9907-413fbb6cd15e",
  displayName: "Johnathan_Borer21",
  updatedById: "c12deaa2-0ad1-412c-9cfa-ae5c56d2f79a",
  promptConfig: {
    messages: [
      {
        role: "correction",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://rural-punctuation.info",
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
      createdById: "3a6a7491-bd33-465e-b5fa-615131b5e554",
      displayName: "Burnice36",
      updatedById: "fc8def2a-4912-4257-bcea-5759ac32814f",
      promptConfig: {
        messages: [
          {
            role: "assistant",
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