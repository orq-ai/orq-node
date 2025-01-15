# ResponseBody2

Prompt snippet model returned from the API

## Example Usage

```typescript
import { ResponseBody2 } from "@orq-ai/node/models/operations";

let value: ResponseBody2 = {
  id: "<id>",
  owner: "<value>",
  domainId: "df589c2d-b090-479a-ae4d-7acbcacee5f0",
  createdById: "73818d25-a565-4752-a317-d1a6d5b68cf2",
  displayName: "Brenna_Rogahn59",
  updatedById: "0560d7fe-8a54-4281-b75c-6e3e9184ba16",
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
  versions: [
    {
      id: "<id>",
      createdById: "d8f8cfb9-5066-4d3b-90ea-64296be4a609",
      displayName: "Adrian_Bosco",
      updatedById: "eeb94015-3986-4cbb-8806-770a408e0098",
      promptConfig: {
        messages: [
          {
            role: "system",
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
  key: "<key>",
  type: "snippet",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `owner`                                                                                                            | *operations.ResponseBodyOwner*                                                                                     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `domainId`                                                                                                         | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `createdById`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `displayName`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `updatedById`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `description`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `promptConfig`                                                                                                     | [operations.UpdatePromptResponseBodyPromptConfig](../../models/operations/updatepromptresponsebodypromptconfig.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `metadata`                                                                                                         | [operations.UpdatePromptResponseBodyMetadata](../../models/operations/updatepromptresponsebodymetadata.md)         | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `created`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_minus_sign:                                                                                                 | The date and time the resource was created                                                                         |
| `updated`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_minus_sign:                                                                                                 | The date and time the resource was last updated                                                                    |
| `versions`                                                                                                         | [operations.ResponseBodyVersions](../../models/operations/responsebodyversions.md)[]                               | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `key`                                                                                                              | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `type`                                                                                                             | [operations.UpdatePromptResponseBodyType](../../models/operations/updatepromptresponsebodytype.md)                 | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |