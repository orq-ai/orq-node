# GetAllPromptTemplatesItemsPromptTemplatesVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { GetAllPromptTemplatesItemsPromptTemplatesVersions } from "@orq-ai/node/models/operations";

let value: GetAllPromptTemplatesItemsPromptTemplatesVersions = {
  id: "<id>",
  createdById: "51ce1c0f-984e-44df-ac81-7736527480ed",
  displayName: "Roxanne_Brown-Murray",
  updatedById: "2903f5a4-fb5c-4163-8a16-485b0a34cf5d",
  promptConfig: {
    messages: [
      {
        role: "prompt",
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

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                       | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `createdById`                                                                                                                                                              | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `displayName`                                                                                                                                                              | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `updatedById`                                                                                                                                                              | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `description`                                                                                                                                                              | *string*                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `promptConfig`                                                                                                                                                             | [operations.GetAllPromptTemplatesItemsPromptTemplatesResponse200PromptConfig](../../models/operations/getallprompttemplatesitemsprompttemplatesresponse200promptconfig.md) | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `metadata`                                                                                                                                                                 | [operations.GetAllPromptTemplatesItemsPromptTemplatesResponse200Metadata](../../models/operations/getallprompttemplatesitemsprompttemplatesresponse200metadata.md)         | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `commit`                                                                                                                                                                   | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `timestamp`                                                                                                                                                                | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |