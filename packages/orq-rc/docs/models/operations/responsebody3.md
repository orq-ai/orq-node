# ResponseBody3

Prompt template model returned from the API

## Example Usage

```typescript
import { ResponseBody3 } from "@orq-ai/node/models/operations";

let value: ResponseBody3 = {
  id: "<id>",
  owner: "vendor",
  domainId: "517e89b0-d011-4f80-aeff-65a5814e082d",
  createdById: "f8420792-5659-4884-8cfc-1fa1f9038f07",
  displayName: "Harrison.Shields76",
  updatedById: "f83c93aa-fba4-4c11-9293-094a7d097a9f",
  promptConfig: {
    messages: [
      {
        role: "prompt",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://hairy-illusion.com/",
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
      createdById: "51739d36-2777-4f05-aa3b-27a1e5eb2e57",
      displayName: "Tito88",
      updatedById: "54c5ba94-a80e-47e0-bcf5-9055e5cee6ff",
      promptConfig: {
        messages: [
          {
            role: "expected_output",
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