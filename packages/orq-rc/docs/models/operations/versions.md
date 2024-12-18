# Versions

Prompt version model returned from the API

## Example Usage

```typescript
import { Versions } from "@orq-ai/node/models/operations";

let value: Versions = {
  id: "<id>",
  createdById: "d5b68cf2-820b-4f91-9056-0d7fe8a54281",
  displayName: "Emmy18",
  updatedById: "9184ba16-e6b1-4d8f-98cf-b95066d3b0ea",
  promptConfig: {
    messages: [
      {
        role: "user",
        content: "<value>",
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