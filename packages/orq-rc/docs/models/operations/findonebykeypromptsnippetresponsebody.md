# FindOneByKeyPromptSnippetResponseBody

Prompt snippet model returned from the API

## Example Usage

```typescript
import { FindOneByKeyPromptSnippetResponseBody } from "@orq-ai/node/models/operations";

let value: FindOneByKeyPromptSnippetResponseBody = {
  id: "<id>",
  owner: "<value>",
  domainId: "f3cd8796-866b-412d-8c46-ed9306add035",
  key: "<key>",
  displayName: "Providenci14",
  promptConfig: {
    messages: [
      {
        role: "system",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  createdById: "b196becd-0486-434f-8450-d234e3cce13b",
  updatedById: "42271560-617d-4d19-bd3c-ec103496b525",
  type: "snippet",
  versions: [
    {
      id: "<id>",
      displayName: "Verona.Schaefer88",
      promptConfig: {
        messages: [
          {
            role: "prompt",
            content: "<value>",
          },
        ],
      },
      metadata: {},
      createdById: "fbd97987-c226-451d-bc8f-1c453c2da0ca",
      updatedById: "b8d484f3-0580-48db-b9ff-d9709fd52cbf",
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