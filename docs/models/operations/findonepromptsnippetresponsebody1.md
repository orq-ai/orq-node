# FindOnePromptSnippetResponseBody1

Prompt model returned from the API

## Example Usage

```typescript
import { FindOnePromptSnippetResponseBody1 } from "@orq-ai/node/models/operations";

let value: FindOnePromptSnippetResponseBody1 = {
  id: "<id>",
  owner: "<value>",
  domainId: "dadac73c-92cf-4541-8af2-710ad5e13e89",
  createdById: "20e2d5c5-4147-4d7f-b806-b3b80c8174e4",
  displayName: "Karson_Schulist",
  updatedById: "cdd2d039-1946-4518-8f94-f6bafe21ce7b",
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
      createdById: "9304a95d-4487-4728-a46b-ec69b652bd5c",
      displayName: "Otto.Rogahn",
      updatedById: "74e6066d-c3d3-4510-8ae7-dcafc4cb613c",
      promptConfig: {
        messages: [
          {
            role: "expected_output",
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