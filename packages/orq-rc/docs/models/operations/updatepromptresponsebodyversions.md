# UpdatePromptResponseBodyVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { UpdatePromptResponseBodyVersions } from "@orq-ai/node/models/operations";

let value: UpdatePromptResponseBodyVersions = {
  id: "<id>",
  createdById: "c905cbaa-9a98-4c57-a635-056133352b51",
  displayName: "Chelsea.Cruickshank",
  updatedById: "0c5a060d-2a42-4e9e-a4df-6e55ff3d5fde",
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

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                                 | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `createdById`                                                                                                                                                                        | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `displayName`                                                                                                                                                                        | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `updatedById`                                                                                                                                                                        | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `description`                                                                                                                                                                        | *string*                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `promptConfig`                                                                                                                                                                       | [operations.UpdatePromptResponseBodyPromptsResponse200ApplicationJSONPromptConfig](../../models/operations/updatepromptresponsebodypromptsresponse200applicationjsonpromptconfig.md) | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `metadata`                                                                                                                                                                           | [operations.UpdatePromptResponseBodyPromptsResponse200ApplicationJSONMetadata](../../models/operations/updatepromptresponsebodypromptsresponse200applicationjsonmetadata.md)         | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `commit`                                                                                                                                                                             | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `timestamp`                                                                                                                                                                          | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |