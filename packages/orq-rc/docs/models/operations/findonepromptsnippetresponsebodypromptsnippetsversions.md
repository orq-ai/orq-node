# FindOnePromptSnippetResponseBodyPromptSnippetsVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { FindOnePromptSnippetResponseBodyPromptSnippetsVersions } from "@orq-ai/node/models/operations";

let value: FindOnePromptSnippetResponseBodyPromptSnippetsVersions = {
  id: "<id>",
  createdById: "3256f47c-dc47-4236-8b8e-d099f08309cc",
  displayName: "Gwen.Franey",
  updatedById: "4f5e2c07-0cf0-4ec5-ae46-1a07ad2cb891",
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
};
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                                 | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `createdById`                                                                                                                                                                        | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `displayName`                                                                                                                                                                        | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `updatedById`                                                                                                                                                                        | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `description`                                                                                                                                                                        | *string*                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `promptConfig`                                                                                                                                                                       | [operations.FindOnePromptSnippetResponseBodyPromptSnippetsResponse200PromptConfig](../../models/operations/findonepromptsnippetresponsebodypromptsnippetsresponse200promptconfig.md) | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `metadata`                                                                                                                                                                           | [operations.FindOnePromptSnippetResponseBodyPromptSnippetsResponse200Metadata](../../models/operations/findonepromptsnippetresponsebodypromptsnippetsresponse200metadata.md)         | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `commit`                                                                                                                                                                             | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `timestamp`                                                                                                                                                                          | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |