# GetAllPromptTemplatesItemsPromptTemplatesVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { GetAllPromptTemplatesItemsPromptTemplatesVersions } from "@orq-ai/node/models/operations";

let value: GetAllPromptTemplatesItemsPromptTemplatesVersions = {
  id: "<id>",
  createdById: "9ffd5ea6-0c8c-4bc4-9c87-a014f25055fd",
  displayName: "Albin.Olson99",
  updatedById: "d46caf91-ecb0-462d-9bef-cf9005ddf10e",
  promptConfig: {
    messages: [
      {
        role: "tool",
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