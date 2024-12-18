# GetAllPromptsItemsPromptsVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { GetAllPromptsItemsPromptsVersions } from "@orq-ai/node/models/operations";

let value: GetAllPromptsItemsPromptsVersions = {
  id: "<id>",
  createdById: "0aba6d58-eb1c-4ed7-8d14-d06d717b5ef2",
  displayName: "Elijah93",
  updatedById: "9b02bbd9-86dd-4760-aca7-8ee2d814ae19",
  promptConfig: {
    messages: [
      {
        role: "user",
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

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                       | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `createdById`                                                                                                                              | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `displayName`                                                                                                                              | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `updatedById`                                                                                                                              | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `description`                                                                                                                              | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `promptConfig`                                                                                                                             | [operations.GetAllPromptsItemsPromptsResponse200PromptConfig](../../models/operations/getallpromptsitemspromptsresponse200promptconfig.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `metadata`                                                                                                                                 | [operations.GetAllPromptsItemsPromptsResponse200Metadata](../../models/operations/getallpromptsitemspromptsresponse200metadata.md)         | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `commit`                                                                                                                                   | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `timestamp`                                                                                                                                | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |