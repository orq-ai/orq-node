# ResponseBodyVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { ResponseBodyVersions } from "@orq-ai/node/models/operations";

let value: ResponseBodyVersions = {
  id: "<id>",
  createdById: "5b1c0d8e-8337-4f5c-99fc-0127dd893111",
  displayName: "Frank.Waters",
  updatedById: "98125600-11e3-4f1d-8968-f27faf124a4a",
  promptConfig: {
    messages: [
      {
        role: "assistant",
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