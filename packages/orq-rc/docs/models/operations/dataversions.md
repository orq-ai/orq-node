# DataVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { DataVersions } from "@orq-ai/node/models/operations";

let value: DataVersions = {
  id: "<id>",
  createdById: "1a9defa1-05db-45e0-9382-7d2dda115629",
  displayName: "Mario.Langosh90",
  updatedById: "c0d0d280-2437-4c29-960d-ba21ee354a45",
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

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                     | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `createdById`                                                                                                                            | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `displayName`                                                                                                                            | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `updatedById`                                                                                                                            | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `description`                                                                                                                            | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `promptConfig`                                                                                                                           | [operations.GetAllPromptsDataPromptsResponse200PromptConfig](../../models/operations/getallpromptsdatapromptsresponse200promptconfig.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `metadata`                                                                                                                               | [operations.GetAllPromptsDataPromptsResponse200Metadata](../../models/operations/getallpromptsdatapromptsresponse200metadata.md)         | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `commit`                                                                                                                                 | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `timestamp`                                                                                                                              | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |