# GetAllPromptsItems1

Prompt model returned from the API

## Example Usage

```typescript
import { GetAllPromptsItems1 } from "@orq-ai/node/models/operations";

let value: GetAllPromptsItems1 = {
  id: "<id>",
  owner: "<value>",
  domainId: "cad71806-3d27-46d8-b793-851c540045b5",
  createdById: "9520665c-1138-4be4-a284-f03c68da9a11",
  displayName: "Fredy.Schuster-Walter62",
  updatedById: "b0a3940a-7b08-402c-b312-2d9c4ae8d3f1",
  promptConfig: {
    messages: [
      {
        role: "assistant",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  versions: [
    {
      id: "<id>",
      createdById: "8537fa4f-4b4c-4a97-939d-0be945b50146",
      displayName: "Rachelle_Jenkins79",
      updatedById: "52185899-f3e0-401a-a822-8f2419e37eb8",
      promptConfig: {
        messages: [
          {
            role: "prompt",
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
      commit: "<value>",
      timestamp: "<value>",
    },
  ],
  type: "prompt",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `owner`                                                                                                | *operations.GetAllPromptsItemsOwner*                                                                   | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `domainId`                                                                                             | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `createdById`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `displayName`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `updatedById`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `description`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `promptConfig`                                                                                         | [operations.GetAllPromptsItemsPromptConfig](../../models/operations/getallpromptsitemspromptconfig.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `metadata`                                                                                             | [operations.GetAllPromptsItemsMetadata](../../models/operations/getallpromptsitemsmetadata.md)         | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `created`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_minus_sign:                                                                                     | The date and time the resource was created                                                             |
| `updated`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_minus_sign:                                                                                     | The date and time the resource was last updated                                                        |
| `versions`                                                                                             | [operations.GetAllPromptsItemsVersions](../../models/operations/getallpromptsitemsversions.md)[]       | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `type`                                                                                                 | [operations.GetAllPromptsItemsType](../../models/operations/getallpromptsitemstype.md)                 | :heavy_check_mark:                                                                                     | N/A                                                                                                    |