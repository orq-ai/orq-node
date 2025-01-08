# ResponseBody3

Prompt template model returned from the API

## Example Usage

```typescript
import { ResponseBody3 } from "@orq-ai/node/models/operations";

let value: ResponseBody3 = {
  id: "<id>",
  owner: "<value>",
  domainId: "58b7d606-15fd-4366-bc00-1a6d47b85282",
  createdById: "82b1c720-f4f8-481f-8b81-265810800606",
  displayName: "Cierra43",
  updatedById: "e4492506-18af-433f-9d9d-3dd38eaa84f7",
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
  versions: [
    {
      id: "<id>",
      createdById: "431a8300-b340-42d3-af24-d64b0ed1cf79",
      displayName: "Dixie90",
      updatedById: "ed09ba46-0189-4377-8029-fa1d619365a6",
      promptConfig: {
        messages: [
          {
            role: "assistant",
            content: [
              {
                type: "image_url",
                imageUrl: {
                  url: "https://pleasant-captain.name/",
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

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                             | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `owner`                                                                                                                          | *operations.UpdatePromptResponseBodyOwner*                                                                                       | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `domainId`                                                                                                                       | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `createdById`                                                                                                                    | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `displayName`                                                                                                                    | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `updatedById`                                                                                                                    | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `description`                                                                                                                    | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `promptConfig`                                                                                                                   | [operations.UpdatePromptResponseBodyPromptsPromptConfig](../../models/operations/updatepromptresponsebodypromptspromptconfig.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `metadata`                                                                                                                       | [operations.UpdatePromptResponseBodyPromptsMetadata](../../models/operations/updatepromptresponsebodypromptsmetadata.md)         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `created`                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                    | :heavy_minus_sign:                                                                                                               | The date and time the resource was created                                                                                       |
| `updated`                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                    | :heavy_minus_sign:                                                                                                               | The date and time the resource was last updated                                                                                  |
| `versions`                                                                                                                       | [operations.UpdatePromptResponseBodyVersions](../../models/operations/updatepromptresponsebodyversions.md)[]                     | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `type`                                                                                                                           | [operations.UpdatePromptResponseBodyPromptsType](../../models/operations/updatepromptresponsebodypromptstype.md)                 | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |