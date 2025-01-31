# FindOneByKeyPromptSnippetResponseBody

Prompt snippet model returned from the API

## Example Usage

```typescript
import { FindOneByKeyPromptSnippetResponseBody } from "@orq-ai/node/models/operations";

let value: FindOneByKeyPromptSnippetResponseBody = {
  id: "<id>",
  owner: "<value>",
  domainId: "34f450d2-34e3-4cce-b13b-342271560617",
  key: "<key>",
  displayName: "Rebeka23",
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
  createdById: "03496b52-5ef3-4c4e-92a1-fbd97987c226",
  updatedById: "1dc8f1c4-53c2-4da0-acae-b8d484f30580",
  type: "snippet",
  versions: [
    {
      id: "<id>",
      displayName: "Scotty95",
      promptConfig: {
        messages: [
          {
            role: "tool",
            content: "<value>",
          },
        ],
      },
      metadata: {},
      createdById: "09fd52cb-fd81-4758-a4dd-596e2bf23bc7",
      updatedById: "371547e2-69f2-4e17-a735-7df8d9536802",
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
| `displayName`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | The prompt snippet’s name, meant to be displayable in the UI.                                                                                                      |
| `description`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | The prompt snippet’s description, meant to be displayable in the UI. Use this field to optionally store a long form explanation of the prompt for your own purpose |
| `promptConfig`                                                                                                                                                     | [operations.FindOneByKeyPromptSnippetPromptConfig](../../models/operations/findonebykeypromptsnippetpromptconfig.md)                                               | :heavy_check_mark:                                                                                                                                                 | A list of messages compatible with the openAI schema                                                                                                               |
| `metadata`                                                                                                                                                         | [operations.FindOneByKeyPromptSnippetMetadata](../../models/operations/findonebykeypromptsnippetmetadata.md)                                                       | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `createdById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `updatedById`                                                                                                                                                      | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `created`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_minus_sign:                                                                                                                                                 | The date and time the resource was created                                                                                                                         |
| `updated`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_minus_sign:                                                                                                                                                 | The date and time the resource was last updated                                                                                                                    |
| `type`                                                                                                                                                             | [operations.FindOneByKeyPromptSnippetType](../../models/operations/findonebykeypromptsnippettype.md)                                                               | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `versions`                                                                                                                                                         | [operations.FindOneByKeyPromptSnippetVersions](../../models/operations/findonebykeypromptsnippetversions.md)[]                                                     | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |