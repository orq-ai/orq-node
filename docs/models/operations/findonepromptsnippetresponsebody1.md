# FindOnePromptSnippetResponseBody1

Prompt model returned from the API

## Example Usage

```typescript
import { FindOnePromptSnippetResponseBody1 } from "@orq-ai/node/models/operations";

let value: FindOnePromptSnippetResponseBody1 = {
  id: "<id>",
  owner: "vendor",
  domainId: "53843e24-643c-4518-a25e-5a82ad1cbd14",
  createdById: "0bd76402-fd4f-4542-aef5-b51681d739c5",
  displayName: "Hilario.Russel-Hermiston65",
  updatedById: "1ef4427d-bd3b-4e4b-964f-5167cfde7b41",
  promptConfig: {
    messages: [
      {
        role: "prompt",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  versions: [
    {
      id: "<id>",
      createdById: "dc35d355-c019-46a4-9ec1-cffb194fb9b7",
      displayName: "Tremaine.Bauch",
      updatedById: "f1e57613-b020-4d92-bcfe-e09495277f04",
      promptConfig: {
        messages: [
          {
            role: "prompt",
            content: [
              {
                type: "image_url",
                imageUrl: {
                  url: "https://made-up-creature.net",
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
  type: "prompt",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `owner`                                                                                                                            | *operations.FindOnePromptSnippetResponseBodyOwner*                                                                                 | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `domainId`                                                                                                                         | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `createdById`                                                                                                                      | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `displayName`                                                                                                                      | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `updatedById`                                                                                                                      | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `description`                                                                                                                      | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `promptConfig`                                                                                                                     | [operations.FindOnePromptSnippetResponseBodyPromptConfig](../../models/operations/findonepromptsnippetresponsebodypromptconfig.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `metadata`                                                                                                                         | [operations.FindOnePromptSnippetResponseBodyMetadata](../../models/operations/findonepromptsnippetresponsebodymetadata.md)         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `created`                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                      | :heavy_minus_sign:                                                                                                                 | The date and time the resource was created                                                                                         |
| `updated`                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                      | :heavy_minus_sign:                                                                                                                 | The date and time the resource was last updated                                                                                    |
| `versions`                                                                                                                         | [operations.FindOnePromptSnippetResponseBodyVersions](../../models/operations/findonepromptsnippetresponsebodyversions.md)[]       | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `type`                                                                                                                             | [operations.FindOnePromptSnippetResponseBodyType](../../models/operations/findonepromptsnippetresponsebodytype.md)                 | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |