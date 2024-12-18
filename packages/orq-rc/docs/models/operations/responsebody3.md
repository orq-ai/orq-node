# ResponseBody3

Prompt template model returned from the API

## Example Usage

```typescript
import { ResponseBody3 } from "@orq-ai/node/models/operations";

let value: ResponseBody3 = {
  id: "<id>",
  owner: "vendor",
  domainId: "ab286384-83e5-491a-84f6-93dc3e0c7d71",
  createdById: "f52c0140-fb8c-4a23-ad57-60b8a4636afa",
  displayName: "Hayden58",
  updatedById: "f462edc0-831c-4388-b370-0e6e764149c8",
  promptConfig: {
    messages: [
      {
        role: "assistant",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://enchanted-republican.net/",
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
      createdById: "35a697cd-d997-4041-a7d9-a342d4821555",
      displayName: "Emery.Borer",
      updatedById: "174a2a74-b320-4d78-9115-8b7d60615fd3",
      promptConfig: {
        messages: [
          {
            role: "exception",
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