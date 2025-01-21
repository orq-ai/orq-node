# ResponseBody2

Prompt snippet model returned from the API

## Example Usage

```typescript
import { ResponseBody2 } from "@orq-ai/node/models/operations";

let value: ResponseBody2 = {
  id: "<id>",
  owner: "<value>",
  domainId: "786ec6dc-8978-4845-aff1-ddaef5e668e5",
  createdById: "6ad53e6b-9c01-4728-95bc-b340d84af1b6",
  displayName: "Hudson.Dickinson89",
  updatedById: "4393025c-da6a-43c7-8f4a-d30683cb9f96",
  promptConfig: {
    messages: [
      {
        role: "expected_output",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  versions: [
    {
      id: "<id>",
      createdById: "5cc11108-2ad8-4d5c-8d3f-b02d978490ff",
      displayName: "Flo.Franey",
      updatedById: "38516b97-fbfc-4231-a67f-e36893495b43",
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