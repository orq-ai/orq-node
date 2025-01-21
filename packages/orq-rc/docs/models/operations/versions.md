# Versions

Prompt version model returned from the API

## Example Usage

```typescript
import { Versions } from "@orq-ai/node/models/operations";

let value: Versions = {
  id: "<id>",
  createdById: "ae33c2da-dfae-4b00-8397-a40635ff442e",
  displayName: "Hector_Ritchie",
  updatedById: "9c5eff22-56fc-4ab5-aa04-f8c9c7fed105",
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

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                   | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `createdById`                                                                                                                                          | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `displayName`                                                                                                                                          | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `updatedById`                                                                                                                                          | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `description`                                                                                                                                          | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `promptConfig`                                                                                                                                         | [operations.UpdatePromptResponseBodyPromptsResponse200PromptConfig](../../models/operations/updatepromptresponsebodypromptsresponse200promptconfig.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `metadata`                                                                                                                                             | [operations.UpdatePromptResponseBodyPromptsResponse200Metadata](../../models/operations/updatepromptresponsebodypromptsresponse200metadata.md)         | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `commit`                                                                                                                                               | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `timestamp`                                                                                                                                            | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |