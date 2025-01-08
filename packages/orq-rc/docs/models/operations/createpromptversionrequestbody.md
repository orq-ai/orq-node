# CreatePromptVersionRequestBody

## Example Usage

```typescript
import { CreatePromptVersionRequestBody } from "@orq-ai/node/models/operations";

let value: CreatePromptVersionRequestBody = {
  id: "<id>",
  displayName: "Delphia.Heller",
  promptConfig: {
    messages: [
      {
        role: "system",
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

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `displayName`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `description`                                                                                            | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `promptConfig`                                                                                           | [operations.CreatePromptVersionPromptConfig](../../models/operations/createpromptversionpromptconfig.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `metadata`                                                                                               | [operations.CreatePromptVersionMetadata](../../models/operations/createpromptversionmetadata.md)         | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `commit`                                                                                                 | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `timestamp`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |