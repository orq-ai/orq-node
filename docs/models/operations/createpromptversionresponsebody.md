# CreatePromptVersionResponseBody

Prompt version created.

## Example Usage

```typescript
import { CreatePromptVersionResponseBody } from "@orq-ai/node/models/operations";

let value: CreatePromptVersionResponseBody = {
  id: "<id>",
  displayName: "Ross.Marvin",
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

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `displayName`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `description`                                                                                                          | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `promptConfig`                                                                                                         | [operations.CreatePromptVersionPromptsPromptConfig](../../models/operations/createpromptversionpromptspromptconfig.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `metadata`                                                                                                             | [operations.CreatePromptVersionPromptsMetadata](../../models/operations/createpromptversionpromptsmetadata.md)         | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `commit`                                                                                                               | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `timestamp`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |