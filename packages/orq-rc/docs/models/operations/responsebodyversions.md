# ResponseBodyVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { ResponseBodyVersions } from "@orq-ai/node/models/operations";

let value: ResponseBodyVersions = {
  id: "<id>",
  createdById: "56de4492-5061-48af-933f-d9d3dd38eaa8",
  displayName: "Wilford_Hahn",
  updatedById: "431a8300-b340-42d3-af24-d64b0ed1cf79",
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

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                             | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `createdById`                                                                                                                                    | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `displayName`                                                                                                                                    | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `updatedById`                                                                                                                                    | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `description`                                                                                                                                    | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |
| `promptConfig`                                                                                                                                   | [operations.UpdatePromptResponseBodyPromptsResponsePromptConfig](../../models/operations/updatepromptresponsebodypromptsresponsepromptconfig.md) | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `metadata`                                                                                                                                       | [operations.UpdatePromptResponseBodyPromptsResponseMetadata](../../models/operations/updatepromptresponsebodypromptsresponsemetadata.md)         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `commit`                                                                                                                                         | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `timestamp`                                                                                                                                      | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |