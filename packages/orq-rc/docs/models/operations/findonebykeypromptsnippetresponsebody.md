# FindOneByKeyPromptSnippetResponseBody

Prompt snippet model returned from the API

## Example Usage

```typescript
import { FindOneByKeyPromptSnippetResponseBody } from "@orq-ai/node/models/operations";

let value: FindOneByKeyPromptSnippetResponseBody = {
  id: "<id>",
  owner: "vendor",
  domainId: "1f0e4c04-b816-469a-bd76-2cb68a20597b",
  key: "<key>",
  promptConfig: {
    messages: [
      {
        role: "exception",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  createdById: "d9bbf4b5-635f-4439-847d-3698fabf6502",
  updatedById: "2c8ad35b-606e-465f-9a51-cbe31b325d80",
  type: "snippet",
  versions: [
    {
      id: "<id>",
      promptConfig: {
        messages: [
          {
            role: "prompt",
            content: [
              {
                type: "image_url",
                imageUrl: {
                  url: "https://these-meander.net/",
                },
              },
            ],
          },
        ],
      },
      metadata: {},
      createdById: "f6e00943-45b9-4cdd-866e-a185f09b4fde",
      updatedById: "94da818a-f9ff-4a87-be01-1c5a968af991",
      timestamp: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                               | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `owner`                                                                                                                                                            | *operations.FindOneByKeyPromptSnippetOwner*                                                                                                                        | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `domainId`                                                                                                                                                         | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `key`                                                                                                                                                              | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `description`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | The prompt snippet’s description, meant to be displayable in the UI. Use this field to optionally store a long form explanation of the prompt for your own purpose |
| `promptConfig`                                                                                                                                                     | [operations.FindOneByKeyPromptSnippetPromptConfig](../../models/operations/findonebykeypromptsnippetpromptconfig.md)                                               | :heavy_check_mark:                                                                                                                                                 | A list of messages compatible with the openAI schema                                                                                                               |
| `metadata`                                                                                                                                                         | [operations.FindOneByKeyPromptSnippetMetadata](../../models/operations/findonebykeypromptsnippetmetadata.md)                                                       | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `createdById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `updatedById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `created`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_minus_sign:                                                                                                                                                 | The date and time the resource was created                                                                                                                         |
| `updated`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_minus_sign:                                                                                                                                                 | The date and time the resource was last updated                                                                                                                    |
| `type`                                                                                                                                                             | [operations.FindOneByKeyPromptSnippetType](../../models/operations/findonebykeypromptsnippettype.md)                                                               | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `versions`                                                                                                                                                         | [operations.FindOneByKeyPromptSnippetVersions](../../models/operations/findonebykeypromptsnippetversions.md)[]                                                     | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |